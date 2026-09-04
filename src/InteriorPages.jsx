import { useEffect } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const PAGE_COPY = {
  en: {
    shared: {
      home: "HOME",
      language: "Language",
      church: "FORDHAM COMMUNITY CHURCH",
      bronx: "THE BRONX · NYC",
      visit: "PLAN A SUNDAY",
      address: "2439 CRESTON AVENUE · BRONX, NY 10468",
      back: "BACK HOME",
    },
    city: {
      eyebrow: "// CITY LINK GROUPS",
      title: ["Life together,", "beyond Sunday."],
      intro: "City Link Groups are smaller weekly gatherings where we enjoy community, open the Bible, ask honest questions, and follow Jesus together.",
      note: "A church can gather in one room on Sunday and still become family around many tables during the week.",
      rhythm: "THE WEEKLY RHYTHM",
      rhythmItems: [
        ["01", "COME AS YOU ARE", "A relaxed space to know people beyond a Sunday hello."],
        ["02", "OPEN THE BIBLE", "We discuss Scripture together and learn how the Gospel shapes ordinary life."],
        ["03", "SHARE LIFE", "Meals, prayer, questions, encouragement, and practical care happen around the table."],
      ],
      network: "ONE CHURCH / MANY TABLES",
      networkTitle: ["Find a table", "in the city."],
      networkCopy: "Groups meet during the week. We’ll help you connect with a group and take a simple next step into shared life.",
      contact: "CONTACT ANDREA",
      contactNote: "Andrea can help you find a City Link Group.",
      email: "andrea@fccbronx.org",
      footerLine: "KNOWN / LOVED / GROWING TOGETHER",
    },
    sermons: {
      eyebrow: "// SERMONS",
      title: ["The Word,", "for the Bronx."],
      intro: "Return to the good news. Listen to recent teaching in English and Español, then explore sermon series from the life of FCC.",
      latest: "LATEST MESSAGES",
      english: "ENGLISH",
      spanish: "ESPAÑOL",
      latestNote: "LAST WEEK",
      watch: "WATCH MESSAGE",
      archive: "SERMON SERIES / ARCHIVE",
      archiveIntro: "Longer journeys through Scripture, theology, relationships, joy, doubt, and life with Jesus.",
      series: [
        ["01", "Reasonably Happy", "THE DISCIPLINE OF JOY", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-M1h5KZwpi-GhUFwQc9Lfvi"],
        ["02", "Happy Church", "LIFE TOGETHER IN CHRIST", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-P0knRzKlduC0dqHFKkealq"],
        ["03", "United To Christ", "OUR LIFE IN JESUS", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-MB6tMEPV2ssSMBCCwznwT2"],
      ],
      more: "EXPLORE THE ORIGINAL SERMON ARCHIVE",
      footerLine: "LISTEN / WATCH / RETURN",
    },
    kids: {
      eyebrow: "// FCC KIDS",
      title: ["Little people.", "Big Gospel."],
      intro: "FCC Kids exists to help the next generation know Jesus and grow as part of a Kingdom family. We want children to be safe, known, and taught the Bible with care.",
      parent: "WE PARTNER WITH PARENTS",
      parentCopy: "Parents are the primary disciplers of their children. FCC Kids comes alongside families with trained volunteers, age-appropriate lessons, and a safe environment.",
      classes: "THREE CLASSROOMS",
      classItems: [
        ["00–02", "NURSERY", "Children ages 0–2 can be checked in from the beginning of service into a safe, enjoyable space with trained volunteers."],
        ["PRE-K", "PRE-K", "Children begin worship with their family, then transition to an engaging class with a biblical lesson, crafts, and safe snacks."],
        ["K–5", "ELEMENTARY", "Elementary children worship with family, then transition to an age-appropriate biblical lesson with activities that help truth stick."],
      ],
      promise: ["SAFE.", "BIBLICAL.", "JOYFUL."],
      promiseCopy: "At every level, we labor to make Christ known to our children.",
      sunday: "PLAN YOUR FAMILY’S SUNDAY",
      sundayCopy: "Come a little early and our team can help your family understand check-in and what to expect.",
      footerLine: "THE NEXT GENERATION / PART OF THE KINGDOM FAMILY",
    },
  },
  es: {
    shared: {
      home: "INICIO",
      language: "Idioma",
      church: "FORDHAM COMMUNITY CHURCH",
      bronx: "EL BRONX · NYC",
      visit: "PLANEA UN DOMINGO",
      address: "2439 CRESTON AVENUE · BRONX, NY 10468",
      back: "VOLVER AL INICIO",
    },
    city: {
      eyebrow: "// GRUPOS CITY LINK",
      title: ["Vida juntos,", "más allá del domingo."],
      intro: "Los grupos City Link son reuniones semanales más pequeñas donde disfrutamos comunidad, abrimos la Biblia, hacemos preguntas honestas y seguimos a Jesús juntos.",
      note: "Una iglesia puede reunirse en un solo lugar el domingo y aun así convertirse en familia alrededor de muchas mesas durante la semana.",
      rhythm: "EL RITMO SEMANAL",
      rhythmItems: [
        ["01", "VEN TAL COMO ERES", "Un espacio relajado para conocer a otros más allá de un saludo dominical."],
        ["02", "ABRE LA BIBLIA", "Conversamos sobre las Escrituras y cómo el Evangelio transforma la vida cotidiana."],
        ["03", "COMPARTE LA VIDA", "Comida, oración, preguntas, ánimo y cuidado práctico alrededor de la mesa."],
      ],
      network: "UNA IGLESIA / MUCHAS MESAS",
      networkTitle: ["Encuentra una mesa", "en la ciudad."],
      networkCopy: "Los grupos se reúnen durante la semana. Te ayudaremos a conectarte y dar un paso sencillo hacia una vida compartida.",
      contact: "CONTACTAR A ANDREA",
      contactNote: "Andrea puede ayudarte a encontrar un grupo City Link.",
      email: "andrea@fccbronx.org",
      footerLine: "CONOCIDOS / AMADOS / CRECIENDO JUNTOS",
    },
    sermons: {
      eyebrow: "// SERMONES",
      title: ["La Palabra,", "para el Bronx."],
      intro: "Vuelve a las buenas nuevas. Escucha enseñanzas recientes en inglés y español y explora series de sermones de la vida de FCC.",
      latest: "MENSAJES RECIENTES",
      english: "INGLÉS",
      spanish: "ESPAÑOL",
      latestNote: "ÚLTIMA SEMANA",
      watch: "VER MENSAJE",
      archive: "SERIES / ARCHIVO",
      archiveIntro: "Recorridos más largos por las Escrituras, la teología, las relaciones, el gozo, las dudas y la vida con Jesús.",
      series: [
        ["01", "Reasonably Happy", "LA DISCIPLINA DEL GOZO", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-M1h5KZwpi-GhUFwQc9Lfvi"],
        ["02", "Happy Church", "VIDA JUNTOS EN CRISTO", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-P0knRzKlduC0dqHFKkealq"],
        ["03", "United To Christ", "NUESTRA VIDA EN JESÚS", "https://www.youtube.com/playlist?list=PLEcGVcVzmk-MB6tMEPV2ssSMBCCwznwT2"],
      ],
      more: "EXPLORAR EL ARCHIVO ORIGINAL",
      footerLine: "ESCUCHA / MIRA / VUELVE",
    },
    kids: {
      eyebrow: "// FCC KIDS",
      title: ["Personas pequeñas.", "Gran Evangelio."],
      intro: "FCC Kids existe para ayudar a la próxima generación a conocer a Jesús y crecer como parte de una familia del Reino. Queremos que cada niño esté seguro, sea conocido y aprenda la Biblia con cuidado.",
      parent: "COLABORAMOS CON LOS PADRES",
      parentCopy: "Los padres son los principales discipuladores de sus hijos. FCC Kids acompaña a las familias con voluntarios capacitados, lecciones apropiadas para cada edad y un ambiente seguro.",
      classes: "TRES SALONES",
      classItems: [
        ["00–02", "CUNA", "Niños de 0–2 años pueden registrarse desde el comienzo del servicio en un espacio seguro y agradable con voluntarios capacitados."],
        ["PRE-K", "PRE-K", "Los niños comienzan la adoración con su familia y luego pasan a una clase bíblica con actividades, manualidades y meriendas seguras."],
        ["K–5", "ELEMENTAL", "Los niños adoran con su familia y luego pasan a una lección bíblica apropiada para su edad con actividades que refuerzan la verdad."],
      ],
      promise: ["SEGURO.", "BÍBLICO.", "GOZOSO."],
      promiseCopy: "En cada nivel, trabajamos para que nuestros niños conozcan a Cristo.",
      sunday: "PLANEA EL DOMINGO DE TU FAMILIA",
      sundayCopy: "Llega un poco temprano y nuestro equipo puede explicarte el registro y qué esperar.",
      footerLine: "LA PRÓXIMA GENERACIÓN / PARTE DE LA FAMILIA DEL REINO",
    },
  },
};

function ArrowIcon({ direction = "upRight" }) {
  const rotation = { right: 0, left: 180, upRight: -45 }[direction] ?? -45;
  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ "--arrow-rotation": `${rotation}deg` }}>
    <path d="M2.5 8h9" />
    <path d="M8.5 4.5 12 8l-3.5 3.5" />
  </svg>;
}

function InteriorHeader({ lang, onLanguage, shared }) {
  return <header className="interior-header">
    <a className="interior-brand" href={import.meta.env.BASE_URL} aria-label={shared.home}>
      <img src={asset("fcc-mark.png")} alt="" />
      <span>{shared.church}</span>
    </a>
    <nav className="interior-nav" aria-label="Ministry pages">
      <a href="#/city-link">CITY LINK</a>
      <a href="#/sermons">SERMONS</a>
      <a href="#/fcc-kids">FCC KIDS</a>
    </nav>
    <div className="interior-actions">
      <div className="language-switch" role="group" aria-label={shared.language}>
        {["en", "es"].map((code) => <button key={code} type="button" className={lang === code ? "active" : ""} aria-pressed={lang === code} onClick={() => onLanguage(code)}>{code.toUpperCase()}</button>)}
      </div>
      <a className="interior-home" href={import.meta.env.BASE_URL}>{shared.back}<ArrowIcon direction="left" /></a>
    </div>
  </header>;
}

function InteriorFooter({ shared, line }) {
  return <footer className="interior-footer">
    <img src={asset("fcc-mark.png")} alt="" />
    <span>{line}</span>
    <span>{shared.address}</span>
    <a href={import.meta.env.BASE_URL}>{shared.home}<ArrowIcon direction="left" /></a>
  </footer>;
}

function CityLinkPage({ copy, shared }) {
  return <main className="interior-main city-page">
    <section className="interior-hero city-hero">
      <div className="city-grid-art" aria-hidden="true">
        <svg viewBox="0 0 700 620" preserveAspectRatio="none">
          <path d="M46 0v148h164v96h118v118h142v258M0 86h142v110h160v118h185v112h213M84 620V472h112V354h144V220h185V98h175" />
          <path className="city-route" d="M46 86h96v110h160v118h185v112h118" />
          <circle cx="46" cy="86" r="7" /><circle cx="302" cy="314" r="7" /><circle cx="605" cy="426" r="7" />
        </svg>
      </div>
      <div className="interior-hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title[0]}<br /><em>{copy.title[1]}</em></h1>
        <p className="interior-lead">{copy.intro}</p>
      </div>
      <div className="city-note"><span>TABLE / 01</span><p>{copy.note}</p></div>
    </section>

    <section className="interior-section">
      <div className="interior-section-label"><span>01</span><span>{copy.rhythm}</span></div>
      <div className="rhythm-grid">
        {copy.rhythmItems.map(([number, title, body]) => <article key={number}>
          <span>{number}</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>)}
      </div>
    </section>

    <section className="city-network interior-section">
      <div className="network-mark" aria-hidden="true"><span /><span /><span /><span /></div>
      <div>
        <p className="eyebrow">{copy.network}</p>
        <h2>{copy.networkTitle[0]}<br />{copy.networkTitle[1]}</h2>
      </div>
      <div className="network-copy">
        <p>{copy.networkCopy}</p>
        <a className="ink-button button-arrow" href={`mailto:${copy.email}`}><span>{copy.contact}</span><ArrowIcon /></a>
        <small>{copy.contactNote}<br />{copy.email}</small>
      </div>
    </section>
  </main>;
}

function SermonsPage({ copy }) {
  const latest = [
    [copy.english, "https://www.youtube.com/watch?v=ot_WvmLzP3o", "EN"],
    [copy.spanish, "https://www.youtube.com/watch?v=P2785La2Zzw", "ES"],
  ];
  return <main className="interior-main sermons-page">
    <section className="interior-hero sermon-hero">
      <div className="sermon-hero-image"><img src={asset("fcc-worship.webp")} alt="" /></div>
      <div className="interior-hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title[0]}<br /><em>{copy.title[1]}</em></h1>
        <p className="interior-lead">{copy.intro}</p>
      </div>
      <div className="sermon-cross" aria-hidden="true"><span /><span /></div>
    </section>

    <section className="latest-messages interior-section">
      <div className="interior-section-label light"><span>01</span><span>{copy.latest}</span></div>
      <div className="latest-grid">
        {latest.map(([language, url, code], index) => <a href={url} target="_blank" rel="noreferrer" className="latest-card" key={code}>
          <span className="latest-index">0{index + 1}</span>
          <span className="latest-code">{code}</span>
          <div><small>{copy.latestNote}</small><h2>{language}</h2></div>
          <span className="latest-watch">{copy.watch}<ArrowIcon /></span>
        </a>)}
      </div>
    </section>

    <section className="series-section interior-section">
      <div className="series-intro">
        <div className="interior-section-label"><span>02</span><span>{copy.archive}</span></div>
        <p>{copy.archiveIntro}</p>
      </div>
      <div className="series-list">
        {copy.series.map(([number, title, note, url]) => <a href={url} target="_blank" rel="noreferrer" key={number}>
          <span>{number}</span><h3>{title}</h3><small>{note}</small><ArrowIcon />
        </a>)}
      </div>
      <a className="archive-link" href="https://www.fccbronx.org/sermon" target="_blank" rel="noreferrer">{copy.more}<ArrowIcon /></a>
    </section>
  </main>;
}

function KidsPage({ copy }) {
  return <main className="interior-main kids-page">
    <section className="interior-hero kids-hero">
      <div className="kids-art" aria-hidden="true">
        <img src={asset("flower-ink.jpg")} alt="" />
        <span className="kids-shape shape-one">A</span>
        <span className="kids-shape shape-two">B</span>
        <span className="kids-shape shape-three">C</span>
      </div>
      <div className="interior-hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title[0]}<br /><em>{copy.title[1]}</em></h1>
        <p className="interior-lead">{copy.intro}</p>
      </div>
    </section>

    <section className="parent-band">
      <span>{copy.parent}</span>
      <p>{copy.parentCopy}</p>
    </section>

    <section className="kids-classes interior-section">
      <div className="interior-section-label"><span>01</span><span>{copy.classes}</span></div>
      <div className="class-stack">
        {copy.classItems.map(([age, title, body], index) => <article key={title}>
          <span className="class-age">{age}</span>
          <div><small>0{index + 1}</small><h2>{title}</h2></div>
          <p>{body}</p>
        </article>)}
      </div>
    </section>

    <section className="kids-promise interior-section">
      <div className="promise-words" aria-label={copy.promise.join(" ")}>
        {copy.promise.map((word) => <strong key={word}>{word}</strong>)}
      </div>
      <div className="promise-copy">
        <p>{copy.promiseCopy}</p>
        <span className="ink-star" aria-hidden="true" />
      </div>
    </section>

    <section className="kids-sunday interior-section">
      <div>
        <p className="eyebrow">// SUNDAY</p>
        <h2>{copy.sunday}</h2>
      </div>
      <div>
        <p>{copy.sundayCopy}</p>
        <a className="ink-button button-arrow" href={import.meta.env.BASE_URL + "#sundays"}><span>{copy.sunday}</span><ArrowIcon /></a>
      </div>
    </section>
  </main>;
}

export function InteriorPage({ route, lang, onLanguage }) {
  const t = PAGE_COPY[lang] ?? PAGE_COPY.en;
  const key = route === "city-link" ? "city" : route === "fcc-kids" ? "kids" : "sermons";
  const copy = t[key];

  useEffect(() => {
    window.scrollTo(0, 0);
    const titles = { city: "City Link Groups", sermons: "Sermons", kids: "FCC Kids" };
    document.title = `${titles[key]} — Fordham Community Church`;
    return () => { document.title = "Fordham Community Church"; };
  }, [key]);

  return <div className={`interior-shell interior-${key}`}>
    <InteriorHeader lang={lang} onLanguage={onLanguage} shared={t.shared} />
    {key === "city" && <CityLinkPage copy={copy} shared={t.shared} />}
    {key === "sermons" && <SermonsPage copy={copy} />}
    {key === "kids" && <KidsPage copy={copy} />}
    <InteriorFooter shared={t.shared} line={copy.footerLine} />
  </div>;
}
