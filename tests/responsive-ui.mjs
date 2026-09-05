import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseURL = process.env.TEST_URL || "http://127.0.0.1:4173/";
const cases = [
  { name: "phone", width: 390, height: 844, touch: true },
  { name: "desktop", width: 1440, height: 1000, touch: false },
];

await fs.mkdir("artifacts/responsive", { recursive: true });
const browser = await chromium.launch({ headless: true });

try {
  for (const testCase of cases) {
    const context = await browser.newContext({
      viewport: { width: testCase.width, height: testCase.height },
      hasTouch: testCase.touch,
      isMobile: testCase.touch,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(baseURL, { waitUntil: "networkidle" });

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) throw new Error(`${testCase.name}: horizontal overflow of ${overflow}px`);

    const languageSwitch = page.locator(".language-switch");
    if (!(await languageSwitch.isVisible())) throw new Error(`${testCase.name}: language switch is not visible`);

    if (testCase.touch) {
      const targetSelector = [
        ".ink-logo",
        ".language-switch button",
        ".visit-header",
        ".ink-header nav a",
        ".hero-visit",
        ".motion-toggle",
        ".chapter-tabs button",
        ".ink-button",
        ".paper-button",
        ".story-controls button:not(:disabled)",
        ".footer-top",
      ].join(",");

      const targets = page.locator(targetSelector);
      for (let index = 0; index < await targets.count(); index += 1) {
        const target = targets.nth(index);
        if (!(await target.isVisible())) continue;
        const box = await target.boundingBox();
        if (!box) continue;
        if (box.width < 43.5 || box.height < 43.5) {
          throw new Error(`phone: control below 44px target: ${await target.evaluate((node) => node.outerHTML.slice(0, 180))} (${box.width}x${box.height})`);
        }
      }
    }

    await page.locator(".language-switch button").filter({ hasText: "ES" }).click();
    await page.waitForFunction(() => document.documentElement.lang === "es");
    const spanishHero = (await page.locator("#hero-title").innerText()).toLowerCase();
    if (!spanishHero.includes("una familia")) throw new Error(`${testCase.name}: Spanish hero did not render`);
    if (!(await page.getByText("Nosotros", { exact: true }).first().isVisible())) throw new Error(`${testCase.name}: Spanish navigation did not render`);

    await page.locator(".hero-visit").click();
    const dialog = page.locator('dialog');
    await dialog.waitFor({ state: "visible" });
    if (!(await dialog.innerText()).includes("Nos vemos")) throw new Error(`${testCase.name}: visit panel did not translate to Spanish`);
    await dialog.getByRole("button", { name: "¿Qué puedo esperar?" }).click();
    if ((await dialog.getByRole("button", { name: "¿Qué puedo esperar?" }).getAttribute('aria-expanded')) !== 'true') throw new Error('FAQ did not expand');
    await dialog.getByRole("button", { name: "Cerrar", exact: true }).click();
    await dialog.waitFor({ state: "hidden" });

    await page.locator(".language-switch button").filter({ hasText: "EN" }).click();
    await page.waitForFunction(() => document.documentElement.lang === "en");
    const englishHero = (await page.locator("#hero-title").innerText()).toLowerCase();
    if (!englishHero.includes("a kingdom")) throw new Error(`${testCase.name}: English hero did not restore`);

    await page.getByRole('tab', {name:'02 Live',exact:true}).click();
    if (!(await page.getByRole('tabpanel').innerText()).includes('Faith around the table')) throw new Error('Chapter panel did not update');
    await page.getByRole('tab', {name:'02 Live',exact:true}).press('ArrowRight');
    if (!(await page.getByRole('tabpanel').innerText()).includes('For our neighbors')) throw new Error('Chapter keyboard navigation failed');
    await page.getByRole('button',{name:'Next event',exact:true}).click();
    await page.waitForTimeout(700);
    if ((await page.locator('.events-track').evaluate(el=>el.scrollLeft)) < 100) throw new Error('Event carousel did not advance');

    const bodyText = await page.locator("body").innerText();
    if (/[↗↑↓→←]/.test(bodyText)) throw new Error(`${testCase.name}: unicode arrow character found in rendered UI`);

    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const step = Math.max(360, Math.floor(testCase.height * 0.72));
    for (let y = 0; y < pageHeight; y += step) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(90);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(180);

    await page.screenshot({
      path: `artifacts/responsive/${testCase.name}.png`,
      fullPage: true,
    });


    const ministryPages = [
      { slug: "about", english: "A Kingdom family", spanish: "Una familia del Reino" },
      { slug: "beliefs", english: "Truth we receive", spanish: "Verdad que recibimos" },
      { slug: "team", english: "Known by name", spanish: "Conocidos por nombre" },
      { slug: "sundays", english: "Come worship", spanish: "Ven a adorar" },
      { slug: "city-link", english: "Life together", spanish: "Vida juntos" },
      { slug: "sermons", english: "The Word", spanish: "La Palabra" },
      { slug: "fcc-kids", english: "Little people", spanish: "Personas pequeñas" },
      { slug: "contact", english: "Start a", spanish: "Empieza una" },
      { slug: "building", english: "A home for", spanish: "Un hogar para" },
      { slug: "give", english: "Give toward", spanish: "Da para" },
    ];

    for (const ministry of ministryPages) {
      await page.goto(`${baseURL}#/${ministry.slug}`, { waitUntil: "networkidle" });

      const ministryOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (ministryOverflow > 1) throw new Error(`${testCase.name}/${ministry.slug}: horizontal overflow of ${ministryOverflow}px`);

      const shell = page.locator(".interior-shell");
      if (!(await shell.isVisible())) throw new Error(`${testCase.name}/${ministry.slug}: interior page shell is not visible`);
      if (!(await page.locator(".interior-header").isVisible())) throw new Error(`${testCase.name}/${ministry.slug}: interior header is not visible`);

      const englishTitle = (await page.locator(".interior-hero h1").innerText()).toLowerCase();
      if (!englishTitle.includes(ministry.english.toLowerCase())) {
        throw new Error(`${testCase.name}/${ministry.slug}: English title did not render`);
      }

      if (testCase.touch) {
        const ministryTargetSelector = [
          ".language-switch button",
          ".interior-home",
          ".interior-nav a",
          ".network-copy .ink-button",
          ".latest-card",
          ".series-list a",
          ".archive-link",
          ".kids-sunday .ink-button",
          ".practice-links a",
          ".about-deeper a",
          ".service-times a",
          ".arrival-actions a",
          ".contact-options > a",
          ".campaign-ask .ink-button",
          ".give-options a",
          ".interior-footer-links a",
          ".interior-footer a",
        ].join(",");

        const ministryTargets = page.locator(ministryTargetSelector);
        for (let index = 0; index < await ministryTargets.count(); index += 1) {
          const target = ministryTargets.nth(index);
          if (!(await target.isVisible())) continue;
          const box = await target.boundingBox();
          if (!box) continue;
          if (box.width < 43.5 || box.height < 43.5) {
            throw new Error(`${testCase.name}/${ministry.slug}: control below 44px target: ${await target.evaluate((node) => node.outerHTML.slice(0, 180))} (${box.width}x${box.height})`);
          }
        }
      }

      await page.locator(".language-switch button").filter({ hasText: "ES" }).click();
      await page.waitForFunction(() => document.documentElement.lang === "es");
      const spanishTitle = (await page.locator(".interior-hero h1").innerText()).toLowerCase();
      if (!spanishTitle.includes(ministry.spanish.toLowerCase())) {
        throw new Error(`${testCase.name}/${ministry.slug}: Spanish title did not render`);
      }

      await page.locator(".language-switch button").filter({ hasText: "EN" }).click();
      await page.waitForFunction(() => document.documentElement.lang === "en");

      const ministryBodyText = await page.locator("body").innerText();
      if (/[↗↑↓→←]/.test(ministryBodyText)) throw new Error(`${testCase.name}/${ministry.slug}: unicode arrow character found in rendered UI`);

      await page.screenshot({
        path: `artifacts/responsive/${testCase.name}-${ministry.slug}.png`,
        fullPage: true,
      });
    }

    await context.close();
  }
} finally {
  await browser.close();
}
