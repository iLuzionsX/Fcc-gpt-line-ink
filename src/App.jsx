import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const navItems = ["about", "sundays", "connect", "sermons", "give"];
const services = [
  { id: "es", time: "9:45 AM" },
  { id: "en", time: "11:45 AM" },
];
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const COPY = {
  en: {
    nav: { about: "About", sundays: "Sundays", connect: "Connect", sermons: "Sermons", give: "Give" },
    mainNav: "Main navigation",
    primaryNav: "Primary",
    home: "Fordham Community Church home",
    language: "Language",
    visit: "VISIT",
    close: "CLOSE",
    planSunday: "// PLAN A SUNDAY",
    nextGathering: "NEXT GATHERING",
    comeAs: ["Come as", "you are."],
    panelIntro: "Pick a gathering and tell us your name. We’ll make your first few minutes feel a little less unfamiliar.",
    chooseGathering: "01 / Choose a gathering",
    yourName: "02 / Your name",
    namePlaceholder: "HOW SHOULD WE GREET YOU?",
    planMySunday: "PLAN MY SUNDAY",
    allSet: "YOU’RE ALL SET",
    seeYou: "See you Sunday.",
    successSmall: "No special dress code. No need to arrive knowing what to do. Just come.",
    directions: "GET DIRECTIONS",
    serviceNames: { es: "Español", en: "English" },
    heroEyebrow: "// BRONX · NYC",
    heroAlt: "Worship team singing and playing music at FCC",
    imageTagSunday: "SUNDAY",
    imageTagBronx: "THE BRONX",
    heroTitle: ["A Church of", "the Bronx,", "for the Bronx."],
    heroDeck: ["Building a Kingdom Family that", "Displays the Love of Jesus"],
    planVisit: "PLAN YOUR VISIT",
    sundays: "SUNDAYS",
    address: "2439 Creston Avenue · Bronx, NY 10468",
    scroll: "SCROLL TO KNOW US",
    whoWeAre: "// WHO WE ARE",
    aboutTitle: ["A kingdom family,", "rooted in the Bronx."],
    aboutCopy: "We gather around God’s Word, live as a family, and love our neighbors in word and deed. Everyone is welcome to come, listen, ask questions, and meet Jesus with us.",
    quote: "“They devoted themselves to the apostles’ teaching and the fellowship.”",
    acts: "ACTS 2:42",
    valuesLabel: "Our values",
    values: [
      ["KNOW", "God’s Word and the Gospel."],
      ["LIVE", "Like family, following Jesus together."],
      ["LOVE", "Our neighbors in word and deed."],
    ],
    lifeAt: "// LIFE AT FCC",
    lifeTitle: ["Not an audience.", "A people."],
    lifeCopy: "Sunday worship, weekday tables, children growing, neighbors serving neighbors. Church life is shared life.",
    galleryLabel: "Life at FCC photo gallery",
    galleryControls: "Gallery controls",
    prev: "PREV",
    next: "NEXT",
    stories: [
      ["fcc-worship.webp", "Musicians leading worship at Fordham Community Church", "WORSHIP", "We sing because Jesus is worthy."],
      ["membership-art.jpg", "Membership classes flower artwork", "GROWTH", "We become a people shaped by God’s Word."],
      ["flower-ink.jpg", "Hand-drawn flowers from an FCC class announcement", "FAMILY", "We belong to one another, not just a room."],
    ],
    pauseLabel: "A quiet pause before connection",
    pauseKicker: "ROOM TO ARRIVE",
    pauseCopy: "No performance. No pressure. Come, listen, ask questions, and meet Jesus with us.",
    growTogether: "GROW / TOGETHER",
    findPeople: "// FIND YOUR PEOPLE",
    churchMore: ["Church is more", "than a Sunday."],
    links: [
      ["CITY LINK GROUPS", "MEET DURING THE WEEK"],
      ["FCC KIDS", "NURSERY–5TH GRADE"],
      ["CONTACT US", "START A CONVERSATION"],
    ],
    latest: "// LATEST MESSAGE",
    listen: "LISTEN / WATCH / RETURN",
    hear: ["Hear the good news", "of Jesus."],
    recent: "Catch up on recent teaching in English and Español.",
    watch: "WATCH SERMONS",
    word: "THE WORD",
    forBronx: "FOR THE BRONX",
    generosity: "// GENEROSITY",
    giveTitle: ["Give toward Gospel", "work in the Bronx."],
    giveCopy: "Support the ministry and mission of Fordham Community Church.",
    giveOnline: "GIVE ONLINE",
    bronxLine: "THE BRONX",
    kingdomFamily: "KINGDOM FAMILY",
    backTop: "BACK TO TOP",
    fordhamBronx: "FORDHAM · THE BRONX",
  },
  es: {
    nav: { about: "Nosotros", sundays: "Domingos", connect: "Conéctate", sermons: "Sermones", give: "Dar" },
    mainNav: "Navegación principal",
    primaryNav: "Principal",
    home: "Inicio de Fordham Community Church",
    language: "Idioma",
    visit: "VISITAR",
    close: "CERRAR",
    planSunday: "// PLANEA UN DOMINGO",
    nextGathering: "PRÓXIMA REUNIÓN",
    comeAs: ["Ven tal", "como eres."],
    panelIntro: "Elige una reunión y dinos tu nombre. Queremos que tus primeros minutos se sientan un poco menos desconocidos.",
    chooseGathering: "01 / Elige una reunión",
    yourName: "02 / Tu nombre",
    namePlaceholder: "¿CÓMO PODEMOS RECIBIRTE?",
    planMySunday: "PLANEAR MI DOMINGO",
    allSet: "TODO LISTO",
    seeYou: "Nos vemos el domingo.",
    successSmall: "No hay código de vestimenta. No necesitas saber qué hacer al llegar. Simplemente ven.",
    directions: "CÓMO LLEGAR",
    serviceNames: { es: "Español", en: "Inglés" },
    heroEyebrow: "// BRONX · NYC",
    heroAlt: "Equipo de adoración cantando y tocando música en FCC",
    imageTagSunday: "DOMINGO",
    imageTagBronx: "EL BRONX",
    heroTitle: ["Una iglesia", "del Bronx,", "para el Bronx."],
    heroDeck: ["Formando una familia del Reino que", "muestra el amor de Jesús"],
    planVisit: "PLANEA TU VISITA",
    sundays: "DOMINGOS",
    address: "2439 Creston Avenue · Bronx, NY 10468",
    scroll: "CONÓCENOS",
    whoWeAre: "// QUIÉNES SOMOS",
    aboutTitle: ["Una familia del Reino,", "arraigada en el Bronx."],
    aboutCopy: "Nos reunimos alrededor de la Palabra de Dios, vivimos como familia y amamos a nuestros vecinos de palabra y de hecho. Todos son bienvenidos a venir, escuchar, hacer preguntas y conocer a Jesús con nosotros.",
    quote: "“Perseveraban en la enseñanza de los apóstoles y en la comunión.”",
    acts: "HECHOS 2:42",
    valuesLabel: "Nuestros valores",
    values: [
      ["CONOCER", "La Palabra de Dios y el Evangelio."],
      ["VIVIR", "Como familia, siguiendo a Jesús juntos."],
      ["AMAR", "A nuestros vecinos de palabra y de hecho."],
    ],
    lifeAt: "// VIDA EN FCC",
    lifeTitle: ["No una audiencia.", "Un pueblo."],
    lifeCopy: "Adoración los domingos, mesas entre semana, niños creciendo y vecinos sirviendo a vecinos. La vida de iglesia es vida compartida.",
    galleryLabel: "Galería de la vida en FCC",
    galleryControls: "Controles de la galería",
    prev: "ANTERIOR",
    next: "SIGUIENTE",
    stories: [
      ["fcc-worship.webp", "Músicos dirigiendo la adoración en Fordham Community Church", "ADORACIÓN", "Cantamos porque Jesús es digno."],
      ["membership-art.jpg", "Ilustración floral de las clases de membresía", "CRECIMIENTO", "Nos convertimos en un pueblo formado por la Palabra de Dios."],
      ["flower-ink.jpg", "Flores dibujadas a mano de un anuncio de clase de FCC", "FAMILIA", "Pertenecemos unos a otros, no solo a un salón."],
    ],
    pauseLabel: "Una pausa tranquila antes de conectar",
    pauseKicker: "ESPACIO PARA LLEGAR",
    pauseCopy: "Sin actuación. Sin presión. Ven, escucha, haz preguntas y conoce a Jesús con nosotros.",
    growTogether: "CRECER / JUNTOS",
    findPeople: "// ENCUENTRA TU GENTE",
    churchMore: ["La iglesia es más", "que un domingo."],
    links: [
      ["GRUPOS CITY LINK", "NOS REUNIMOS ENTRE SEMANA"],
      ["FCC KIDS", "CUNA–5.º GRADO"],
      ["CONTÁCTANOS", "INICIA UNA CONVERSACIÓN"],
    ],
    latest: "// ÚLTIMO MENSAJE",
    listen: "ESCUCHA / MIRA / VUELVE",
    hear: ["Escucha las buenas nuevas", "de Jesús."],
    recent: "Ponte al día con enseñanzas recientes en inglés y español.",
    watch: "VER SERMONES",
    word: "LA PALABRA",
    forBronx: "PARA EL BRONX",
    generosity: "// GENEROSIDAD",
    giveTitle: ["Da para la obra", "del Evangelio en el Bronx."],
    giveCopy: "Apoya el ministerio y la misión de Fordham Community Church.",
    giveOnline: "DAR EN LÍNEA",
    bronxLine: "EL BRONX",
    kingdomFamily: "FAMILIA DEL REINO",
    backTop: "VOLVER ARRIBA",
    fordhamBronx: "FORDHAM · EL BRONX",
  },
};

function upcomingSunday(lang) {
  const date = new Date();
  const day = date.getDay();
  const add = day === 0 ? 0 : 7 - day;
  date.setDate(date.getDate() + add);
  return new Intl.DateTimeFormat(lang === "es" ? "es-US" : "en-US", { month: "short", day: "numeric" }).format(date).toUpperCase();
}

function ArrowIcon({ direction = "upRight" }) {
  const rotation = { right: 0, down: 90, left: 180, up: -90, upRight: -45 }[direction] ?? -45;
  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ "--arrow-rotation": `${rotation}deg` }}>
    <path d="M2.5 8h9" />
    <path d="M8.5 4.5 12 8l-3.5 3.5" />
  </svg>;
}

function Mark({ homeLabel }) {
  return <a className="mark-link" href="#top" aria-label={homeLabel}>
    <img className="mark" src={asset("fcc-mark.png")} alt="Fordham Community Church" />
  </a>;
}

function LanguageSwitch({ lang, onChange, label }) {
  return <div className="language-switch" role="group" aria-label={label}>
    {["en", "es"].map((code) => <button key={code} type="button" className={lang === code ? "active" : ""} aria-pressed={lang === code} onClick={() => onChange(code)}>{code.toUpperCase()}</button>)}
  </div>;
}

function Header({ active, progress, onVisit, t, lang, onLanguage }) {
  return <header className="site-header" aria-label={t.mainNav}>
    <Mark homeLabel={t.home} />
    <nav className="nav-rail" aria-label={t.primaryNav}>
      {navItems.map((id) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`}>{t.nav[id]}</a>)}
    </nav>
    <div className="header-actions">
      <LanguageSwitch lang={lang} onChange={onLanguage} label={t.language} />
      <button className="header-visit" onClick={onVisit}>{t.visit}<ArrowIcon /></button>
    </div>
    <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
  </header>;
}

function VisitPanel({ open, onClose, t, lang }) {
  const [service, setService] = useState(services[1].id);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const sunday = useMemo(() => upcomingSunday(lang), [lang]);

  useEffect(() => {
    if (!open) return undefined;
    setSubmitted(false);
    document.body.classList.add("panel-open");
    const previous = document.activeElement;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = [...panelRef.current?.querySelectorAll("button, a, input, [tabindex]:not([tabindex='-1'])") || []]
        .filter((node) => !node.disabled && node.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.body.classList.remove("panel-open");
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  const chosen = services.find((item) => item.id === service) || services[1];
  const chosenLabel = t.serviceNames[chosen.id];

  return <div className={`visit-shell ${open ? "open" : ""}`} aria-hidden={!open}>
    <button className="visit-backdrop" onClick={onClose} aria-label={t.close} tabIndex={open ? 0 : -1} />
    <aside ref={panelRef} className="visit-panel" role="dialog" aria-modal="true" aria-labelledby="visit-title">
      <div className="panel-topline">
        <span>{t.planSunday}</span>
        <button ref={closeRef} className="text-button" onClick={onClose}>{t.close}</button>
      </div>

      <div className="panel-date"><span>{t.nextGathering}</span><strong>{sunday}</strong></div>

      <h2 id="visit-title">{t.comeAs[0]}<br />{t.comeAs[1]}</h2>
      <p className="panel-intro">{t.panelIntro}</p>

      {!submitted ? <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <fieldset>
          <legend>{t.chooseGathering}</legend>
          <div className="service-grid">
            {services.map((option) => <label className="service-choice" key={option.id}>
              <input type="radio" name="service" value={option.id} checked={service === option.id} onChange={() => setService(option.id)} />
              <span><small>{t.serviceNames[option.id]}</small><strong>{option.time}</strong><ArrowIcon /></span>
            </label>)}
          </div>
        </fieldset>
        <label className="field-label" htmlFor="visit-name">{t.yourName}</label>
        <input id="visit-name" className="line-input" name="name" placeholder={t.namePlaceholder} autoComplete="name" required />
        <button className="ink-button wide button-arrow" type="submit"><span>{t.planMySunday}</span><ArrowIcon /></button>
      </form> : <div className="success-note" role="status">
        <p className="eyebrow">{t.allSet}</p>
        <h3>{t.seeYou}</h3>
        <p>{chosenLabel} · {chosen.time}<br />2439 Creston Avenue, Bronx</p>
        <p className="success-small">{t.successSmall}</p>
      </div>}

      <div className="panel-foot">
        <a className="directions-link button-arrow" href="https://www.google.com/maps/dir/?api=1&destination=2439+Creston+Avenue+Bronx+NY+10468" target="_blank" rel="noreferrer"><span>{t.directions}</span><ArrowIcon /></a>
        <span>{t.fordhamBronx}</span>
      </div>
    </aside>
  </div>;
}

function StoryStrip({ t }) {
  const stripRef = useRef(null);
  const [index, setIndex] = useState(0);
  const stories = t.stories;

  const measure = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const cards = [...el.querySelectorAll(".story-card")];
    let closest = 0;
    let distance = Infinity;
    cards.forEach((card, cardIndex) => {
      const delta = Math.abs(card.offsetLeft - el.scrollLeft);
      if (delta < distance) {
        closest = cardIndex;
        distance = delta;
      }
    });
    setIndex(closest);
  }, []);

  const move = (direction) => {
    const next = Math.max(0, Math.min(stories.length - 1, index + direction));
    const card = stripRef.current?.querySelectorAll(".story-card")[next];
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return <div className="story-wrap">
    <div className="story-strip" ref={stripRef} onScroll={measure} aria-label={t.galleryLabel}>
      {stories.map(([image, alt, title, copy], storyIndex) => <figure className="story-card" key={title}>
        <div className="story-image-wrap">
          <img src={asset(image)} alt={alt} />
          <span className="story-number">0{storyIndex + 1}</span>
        </div>
        <figcaption><strong>{title}</strong><span>{copy}</span></figcaption>
      </figure>)}
    </div>
    <div className="story-meta">
      <div className="story-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(index + 1) / stories.length})` }} /></div>
      <span className="story-count">0{index + 1} / 0{stories.length}</span>
      <div className="story-controls" aria-label={t.galleryControls}>
        <button onClick={() => move(-1)} disabled={index === 0}>{t.prev}</button>
        <span aria-hidden="true">/</span>
        <button onClick={() => move(1)} disabled={index === stories.length - 1}>{t.next}</button>
      </div>
    </div>
  </div>;
}

function ValueCard({ number, word, copy }) {
  return <article>
    <span>{number}</span>
    <div className="value-word"><h3>{word}</h3><ArrowIcon /></div>
    <p>{copy}</p>
  </article>;
}

export function App() {
  const [visitOpen, setVisitOpen] = useState(false);
  const [active, setActive] = useState("sundays");
  const [progress, setProgress] = useState(0);
  const [lang, setLang] = useState(() => {
    try {
      const saved = window.localStorage.getItem("fcc-language");
      return saved === "es" ? "es" : "en";
    } catch {
      return "en";
    }
  });
  const t = COPY[lang];
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "en";
    try {
      window.localStorage.setItem("fcc-language", lang);
    } catch {
      // Storage can be unavailable in private browsing contexts.
    }
  }, [lang]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));

    const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-32% 0px -60%", threshold: 0 });
    navItems.forEach((id) => {
      const node = document.getElementById(id);
      if (node) navObserver.observe(node);
    });

    let ticking = false;
    const syncScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(ratio);
      const heroProgress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      document.documentElement.style.setProperty("--hero-scroll", heroProgress.toFixed(3));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(syncScroll);
        ticking = true;
      }
    };
    syncScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onHeroPointer = (event) => {
    const node = heroRef.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const bounds = node.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    node.style.setProperty("--pointer-x", x.toFixed(3));
    node.style.setProperty("--pointer-y", y.toFixed(3));
  };

  return <div id="top" className="site-frame" style={{ "--paper-texture": `url(${asset("paper-texture.png")})` }}>
    <Header active={active} progress={progress} onVisit={() => setVisitOpen(true)} t={t} lang={lang} onLanguage={setLang} />
    <main>
      <section id="sundays" className="hero" aria-labelledby="hero-title" ref={heroRef} onPointerMove={onHeroPointer}>
        <div className="hero-image-wrap">
          <img className="hero-image" src={asset("fcc-worship.webp")} alt={t.heroAlt} />
          <div className="hero-image-tag"><span>{t.imageTagSunday}</span><span>{t.imageTagBronx}</span></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-item">{t.heroEyebrow}</p>
          <h1 id="hero-title" className="hero-item">{t.heroTitle.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-deck hero-item">{t.heroDeck[0]}<br className="desktop-break" /> {t.heroDeck[1]}</p>
          <button className="ink-button hero-item button-arrow" onClick={() => setVisitOpen(true)}><span>{t.planVisit}</span><ArrowIcon /></button>
          <div className="service-block hero-item">
            <span className="service-kicker">{t.sundays}</span>
            <div className="times"><p><span>{t.serviceNames.es.toUpperCase()}</span><strong>9:45 AM</strong></p><p><span>{t.serviceNames.en.toUpperCase()}</span><strong>11:45 AM</strong></p></div>
          </div>
          <address className="address hero-item">{t.address}</address>
        </div>
        <img className="hero-branch" src={asset("branch-ink.png")} alt="" aria-hidden="true" />
        <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowIcon direction="down" /></a>
      </section>

      <section id="about" className="section section-about" data-reveal>
        <div className="section-label"><span>01</span><span>{t.whoWeAre}</span></div>
        <div className="about-copy">
          <div><h2>{t.aboutTitle[0]}<br />{t.aboutTitle[1]}</h2><p>{t.aboutCopy}</p></div>
          <blockquote>{t.quote}<cite>{t.acts}</cite></blockquote>
        </div>
        <div className="values" aria-label={t.valuesLabel}>
          {t.values.map(([word, copy], index) => <ValueCard key={word} number={`0${index + 1}`} word={word} copy={copy} />)}
        </div>
      </section>

      <section className="section life-section" data-reveal>
        <div className="section-label"><span>02</span><span>{t.lifeAt}</span></div>
        <div className="section-intro"><h2>{t.lifeTitle[0]}<br />{t.lifeTitle[1]}</h2><p>{t.lifeCopy}</p></div>
        <StoryStrip t={t} />
      </section>

      <section className="editorial-pause" aria-label={t.pauseLabel} data-reveal>
        <div className="pause-rule" aria-hidden="true" />
        <div className="pause-copy"><span>{t.pauseKicker}</span><p>{t.pauseCopy}</p></div>
      </section>

      <section id="connect" className="section connect-section" data-reveal>
        <div className="connect-art-shell"><img className="connect-art" src={asset("flower-ink.jpg")} alt="" /><span className="art-note">{t.growTogether}</span></div>
        <div className="connect-copy">
          <p className="eyebrow">{t.findPeople}</p>
          <h2>{t.churchMore[0]}<br />{t.churchMore[1]}</h2>
          <div className="link-stack">
            <a href="https://www.fccbronx.org/city-link-groups" target="_blank" rel="noreferrer"><span>{t.links[0][0]}</span><span>{t.links[0][1]}</span><ArrowIcon /></a>
            <a href="https://www.fccbronx.org/fcc-kids" target="_blank" rel="noreferrer"><span>{t.links[1][0]}</span><span>{t.links[1][1]}</span><ArrowIcon /></a>
            <a href="https://www.fccbronx.org/contact" target="_blank" rel="noreferrer"><span>{t.links[2][0]}</span><span>{t.links[2][1]}</span><ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="sermons" className="section dark-section" data-reveal>
        <div className="section-label"><span>03</span><span>{t.latest}</span></div>
        <div className="sermon-grid">
          <div className="sermon-stamp"><span>{t.word}</span><span>{t.forBronx}</span><i>FCC</i></div>
          <div>
            <p className="eyebrow">{t.listen}</p>
            <h2>{t.hear[0]}<br />{t.hear[1]}</h2>
            <p>{t.recent}</p>
            <a className="paper-button button-arrow" href="https://www.fccbronx.org/sermon" target="_blank" rel="noreferrer"><span>{t.watch}</span><ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="give" className="section give-section" data-reveal>
        <p className="eyebrow">{t.generosity}</p>
        <h2>{t.giveTitle[0]}<br />{t.giveTitle[1]}</h2>
        <p>{t.giveCopy}</p>
        <a className="ink-button button-arrow" href="https://www.fccbronx.org/give" target="_blank" rel="noreferrer"><span>{t.giveOnline}</span><ArrowIcon /></a>
        <div className="give-line" aria-hidden="true"><span>{t.bronxLine}</span><span>·</span><span>JESUS</span><span>·</span><span>{t.kingdomFamily}</span></div>
      </section>
    </main>

    <footer>
      <Mark homeLabel={t.home} />
      <p>{t.fordhamBronx} · NYC</p>
      <p>2439 CRESTON AVENUE<br />BRONX, NY 10468</p>
      <a className="footer-top" href="#top"><span>{t.backTop}</span><ArrowIcon direction="up" /></a>
    </footer>

    <VisitPanel open={visitOpen} onClose={() => setVisitOpen(false)} t={t} lang={lang} />
  </div>;
}
