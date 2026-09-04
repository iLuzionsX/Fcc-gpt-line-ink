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
        ".mark-link",
        ".language-switch button",
        ".header-visit",
        ".nav-rail a",
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
    if (!spanishHero.includes("una iglesia")) throw new Error(`${testCase.name}: Spanish hero did not render`);
    if (!(await page.getByText("Nosotros", { exact: true }).first().isVisible())) throw new Error(`${testCase.name}: Spanish navigation did not render`);

    await page.locator(".header-visit").click();
    const dialog = page.locator('[role="dialog"]');
    await dialog.waitFor({ state: "visible" });
    if (!(await dialog.innerText()).includes("Ven tal")) throw new Error(`${testCase.name}: visit panel did not translate to Spanish`);
    await dialog.getByRole("button", { name: "CERRAR" }).click();

    await page.locator(".language-switch button").filter({ hasText: "EN" }).click();
    await page.waitForFunction(() => document.documentElement.lang === "en");
    const englishHero = (await page.locator("#hero-title").innerText()).toLowerCase();
    if (!englishHero.includes("a church of")) throw new Error(`${testCase.name}: English hero did not restore`);

    const bodyText = await page.locator("body").innerText();
    if (/[↗↑↓→←]/.test(bodyText)) throw new Error(`${testCase.name}: unicode arrow character found in rendered UI`);

    await page.screenshot({
      path: `artifacts/responsive/${testCase.name}.png`,
      fullPage: true,
    });

    await context.close();
  }
} finally {
  await browser.close();
}
