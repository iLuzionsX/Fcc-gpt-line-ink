import { useEffect } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const ROUTES = [
  ["about", "ABOUT"],
  ["beliefs", "BELIEFS"],
  ["team", "TEAM"],
  ["sundays", "SUNDAYS"],
  ["city-link", "CITY LINK"],
  ["sermons", "SERMONS"],
  ["fcc-kids", "FCC KIDS"],
  ["give", "GIVE"],
];

const COPY = {
  en: {
    shared: { home: "BACK HOME", language: "Language", church: "FORDHAM COMMUNITY CHURCH", address: "2439 CRESTON AVENUE · BRONX, NY 10468" },
    about: {
      eyebrow: "// ABOUT FCC", title: ["A Kingdom family,", "rooted here."],
      intro: "Jesus has all authority in heaven and on earth. Because he died, rose, and sends his people to make disciples, we want the Gospel to shape our life together in the Bronx.",
      practice: "THREE COMMITMENTS / TWO PRACTICES",
      values: [["KNOW", "Embrace God’s Word and the Gospel as central."], ["LIVE", "Live like a family, following God together across cultures and ordinary life."], ["LOVE", "Love our neighbors with our words and hands, sharing Jesus and seeking the good of our neighborhood."]],
      two: [["SUNDAY", "Gather around the Word, prayer, worship, and one another."], ["CITY LINK", "Gather in homes during the week for Scripture, prayer, community, and care."]],
      quote: "Building a Kingdom Family that Displays the Love of Jesus.",
      explore: "GO DEEPER", beliefs: "WHAT WE BELIEVE", team: "MEET THE TEAM",
    },
    beliefs: {
      eyebrow: "// WHAT WE BELIEVE", title: ["Truth we receive,", "and rest in."],
      intro: "We believe the Scriptures are the inspired, inerrant Word of God; salvation is by grace alone through faith in Jesus Christ alone; Jesus died for sins, rose from the dead, and will return in glory.",
      core: "DOCTRINAL OVERVIEW",
      items: [
        ["01", "THE SCRIPTURES", "God’s Word is authoritative, infallible, inerrant, and sufficient for faith and practice."],
        ["02", "GOD / TRINITY", "There is one God, eternally existing as Father, Son, and Holy Spirit."],
        ["03", "JESUS CHRIST", "Jesus is fully God and fully man, the only mediator, who died for sinners, rose bodily, reigns, and will return."],
        ["04", "THE HOLY SPIRIT", "The Spirit applies Christ’s work, gives life, seals believers, and builds up the church."],
        ["05", "GRACE / FAITH / JUSTIFICATION", "Sinners are saved by God’s grace through faith in Christ, not by their works, and are counted righteous in him."],
        ["06", "THE CHURCH", "Jesus is the head of his church; believers gather in local congregations under biblical leadership."],
        ["07", "BAPTISM / LORD’S SUPPER", "Jesus gave baptism and the Lord’s Supper to his church as covenant signs and acts of obedience."],
        ["08", "RESURRECTION / JUDGMENT", "Christ will return, the dead will be raised, and God will judge the world in righteousness."],
      ],
      full: "READ THE FULL 19-ARTICLE DOCTRINAL STATEMENT",
    },
    team: {
      eyebrow: "// TEAM & LEADERSHIP", title: ["Known by name.", "Serving together."],
      intro: "Elders, deacons, ministry leaders, and staff serve the church so the body can grow in truth, love, care, and mission.",
      groups: "OUR TEAM",
      people: [
        ["Ramny Perez", "LEAD PASTOR / ELDER", "Born in the Dominican Republic and raised in NYC, Ramny has a passion to help people see the beauty of Jesus.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1567181932872-TPJXQSJWU0PLUPAWM8K3/RamnyPerez_HeadShot.jpg"],
        ["Paul Yoo", "ELDER", "Raised in New York, including the Bronx, Paul came to faith in college and serves FCC as an elder.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1631049053261-3V7JNPSQFXMSZNIQI5T8/27881163-AFF1-4933-8EA4-635C05C5CA55_1_105_c.jpeg"],
        ["Anthony Ramirez", "DEACON / WORSHIP LEADER", "Anthony moved to the Bronx in 2018 to help plant FCC and serves as a deacon and worship leader.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/b585593a-d4b0-4d0d-9bcf-a6070d459507/tempImagePZHvX0.jpg"],
        ["Hanna Lindsey", "DEACONESS", "Originally from Nashville, Hanna moved to the Bronx in 2018 to help plant FCC and serves as a deaconess.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1605024130186-8BKHYLV9F8QXRTD570D2/IMG_2385.jpg"],
        ["Niza Rodriguez", "DEACONESS", "Niza serves Fordham Community Church as a deaconess.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1605024232090-EH6R7NBNZP1MVVXFWN17/IMG_0268.jpeg"],
        ["Florence Moore", "DEACON", "Florence serves through community outreach, relationships, and practical ministry in the Fordham Road community.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/cae4ff2c-5718-47c8-b227-9185b2c3c0e2/tempImageK4rTTn.jpg"],
        ["Andrea Rondon", "ADMINISTRATIVE ASSISTANT", "Born and raised in the Bronx, Andrea serves her community through gospel-centered ministry at FCC.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/809cd4f2-b9a7-48af-ad06-95c7ccdba4e5/Head%2BShot%2Bfor%2Bsite%2B.jpg"],
      ],
    },
    sundays: {
      eyebrow: "// SUNDAY GATHERINGS", title: ["Come worship.", "Come as you are."],
      intro: "We gather every Sunday at 2439 Creston Avenue for congregational worship in Spanish and English.",
      spanish: "ESPAÑOL", english: "ENGLISH", what: "WHAT TO EXPECT",
      steps: [["01", "SINGING"], ["02", "PUBLIC PRAYER"], ["03", "OFFERING"], ["04", "TEACHING FROM THE WORD"], ["05", "CLOSING BLESSING"]],
      expect: "Dress in whatever feels comfortable. We want a worshipful, family-like environment, with safe and engaging ministry for children from preschool through 5th grade.",
      arrive: "GETTING HERE", transit: "Walking distance to the D and 4 trains and major buses on Fordham Road. Street parking is available, with a nearby lot around 192nd Street and Jerome Avenue.",
      directions: "GET DIRECTIONS", livestream: "WATCH LIVESTREAM",
    },
    contact: {
      eyebrow: "// CONTACT", title: ["Start a", "conversation."],
      intro: "Questions about visiting, getting connected, or taking a next step? We’d love to help you find the right place to start.",
      options: [["VISIT FCC", "Plan a Sunday and find directions.", "#/sundays"], ["CITY LINK", "For City Link Groups, contact Andrea.", "mailto:andrea@fccbronx.org"], ["GENERAL CONTACT", "Use FCC’s current contact form for other questions.", "https://www.fccbronx.org/contact"]],
      note: "CITY LINK CONTACT", email: "andrea@fccbronx.org",
    },
    building: {
      eyebrow: "// FCC BUILDING CAMPAIGN", title: ["A home for", "Gospel work."],
      intro: "FCC desires to see the Bronx filled with healthy Gospel churches and sees acquiring a permanent building as a tool to project Gospel ministry forward.",
      ask: "THE ASK", partners: "1,000", amount: "$5,000", partnersLabel: "PARTNERS", amountLabel: "EACH",
      line: "One church. One borough. A long-term tool for Gospel ministry.",
      learn: "LEARN ABOUT THE BUILDING CAMPAIGN",
    },
    give: {
      eyebrow: "// GENEROSITY", title: ["Give toward", "Gospel work."],
      intro: "Giving supports the ministry and mission of Fordham Community Church as we seek to build a Kingdom family that displays the love of Jesus in the Bronx.",
      ministry: "GENERAL GIVING", ministryCopy: "Support the ongoing ministry and mission of FCC.", give: "GIVE ONLINE",
      building: "BUILDING CAMPAIGN", buildingCopy: "Partner toward a permanent home for Gospel ministry in the Bronx.", buildingCta: "VIEW CAMPAIGN",
    },
  },
  es: {
    shared: { home: "VOLVER AL INICIO", language: "Idioma", church: "FORDHAM COMMUNITY CHURCH", address: "2439 CRESTON AVENUE · BRONX, NY 10468" },
    about: {
      eyebrow: "// SOBRE FCC", title: ["Una familia del Reino,", "arraigada aquí."],
      intro: "Jesús tiene toda autoridad en el cielo y en la tierra. Porque murió, resucitó y envía a su pueblo a hacer discípulos, queremos que el Evangelio forme nuestra vida juntos en el Bronx.",
      practice: "TRES COMPROMISOS / DOS PRÁCTICAS",
      values: [["CONOCER", "Abrazar la Palabra de Dios y el Evangelio como el centro."], ["VIVIR", "Vivir como familia, siguiendo a Dios juntos entre culturas y en la vida cotidiana."], ["AMAR", "Amar a nuestros vecinos con palabras y acciones, compartiendo a Jesús y buscando el bien del vecindario."]],
      two: [["DOMINGO", "Reunirnos alrededor de la Palabra, la oración, la adoración y unos con otros."], ["CITY LINK", "Reunirnos en hogares durante la semana para Biblia, oración, comunidad y cuidado."]],
      quote: "Formando una familia del Reino que muestra el amor de Jesús.", explore: "CONOCE MÁS", beliefs: "LO QUE CREEMOS", team: "CONOCE AL EQUIPO",
    },
    beliefs: {
      eyebrow: "// LO QUE CREEMOS", title: ["Verdad que recibimos,", "y en la que descansamos."],
      intro: "Creemos que las Escrituras son la Palabra inspirada e inerrante de Dios; que la salvación es solo por gracia mediante la fe en Jesucristo; y que Jesús murió por los pecados, resucitó y volverá en gloria.",
      core: "RESUMEN DOCTRINAL",
      items: [
        ["01", "LAS ESCRITURAS", "La Palabra de Dios es autoritativa, infalible, inerrante y suficiente para la fe y la práctica."],
        ["02", "DIOS / TRINIDAD", "Hay un solo Dios que existe eternamente como Padre, Hijo y Espíritu Santo."],
        ["03", "JESUCRISTO", "Jesús es verdadero Dios y verdadero hombre, el único mediador; murió, resucitó, reina y volverá."],
        ["04", "EL ESPÍRITU SANTO", "El Espíritu aplica la obra de Cristo, da vida, sella a los creyentes y edifica la iglesia."],
        ["05", "GRACIA / FE / JUSTIFICACIÓN", "Los pecadores son salvos por gracia mediante la fe en Cristo, no por sus obras, y reciben su justicia."],
        ["06", "LA IGLESIA", "Jesús es la cabeza de su iglesia; los creyentes se reúnen en congregaciones locales bajo liderazgo bíblico."],
        ["07", "BAUTISMO / CENA DEL SEÑOR", "Jesús dio el bautismo y la Cena del Señor a su iglesia como señales del pacto y actos de obediencia."],
        ["08", "RESURRECCIÓN / JUICIO", "Cristo volverá, los muertos resucitarán y Dios juzgará al mundo con justicia."],
      ],
      full: "LEER LA DECLARACIÓN DOCTRINAL COMPLETA DE 19 ARTÍCULOS",
    },
    team: {
      eyebrow: "// EQUIPO Y LIDERAZGO", title: ["Conocidos por nombre.", "Sirviendo juntos."],
      intro: "Ancianos, diáconos, líderes de ministerio y personal sirven a la iglesia para que el cuerpo crezca en verdad, amor, cuidado y misión.",
      groups: "NUESTRO EQUIPO",
      people: [
        ["Ramny Perez", "PASTOR PRINCIPAL / ANCIANO", "Nacido en la República Dominicana y criado en NYC, Ramny tiene pasión por ayudar a otros a ver la belleza de Jesús.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1567181932872-TPJXQSJWU0PLUPAWM8K3/RamnyPerez_HeadShot.jpg"],
        ["Paul Yoo", "ANCIANO", "Criado en Nueva York, incluyendo el Bronx, Paul conoció al Señor en la universidad y sirve como anciano.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1631049053261-3V7JNPSQFXMSZNIQI5T8/27881163-AFF1-4933-8EA4-635C05C5CA55_1_105_c.jpeg"],
        ["Anthony Ramirez", "DIÁCONO / LÍDER DE ADORACIÓN", "Anthony se mudó al Bronx en 2018 para ayudar a plantar FCC y sirve como diácono y líder de adoración.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/b585593a-d4b0-4d0d-9bcf-a6070d459507/tempImagePZHvX0.jpg"],
        ["Hanna Lindsey", "DIACONISA", "Originaria de Nashville, Hanna se mudó al Bronx en 2018 para ayudar a plantar FCC y sirve como diaconisa.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1605024130186-8BKHYLV9F8QXRTD570D2/IMG_2385.jpg"],
        ["Niza Rodriguez", "DIACONISA", "Niza sirve a Fordham Community Church como diaconisa.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/1605024232090-EH6R7NBNZP1MVVXFWN17/IMG_0268.jpeg"],
        ["Florence Moore", "DIÁCONO", "Florence sirve por medio del alcance comunitario, las relaciones y el ministerio práctico en Fordham Road.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/cae4ff2c-5718-47c8-b227-9185b2c3c0e2/tempImageK4rTTn.jpg"],
        ["Andrea Rondon", "ASISTENTE ADMINISTRATIVA", "Nacida y criada en el Bronx, Andrea sirve a su comunidad a través del ministerio centrado en el Evangelio en FCC.", "https://images.squarespace-cdn.com/content/v1/5ab3bdf555b02c3e0c6273f1/809cd4f2-b9a7-48af-ad06-95c7ccdba4e5/Head%2BShot%2Bfor%2Bsite%2B.jpg"],
      ],
    },
    sundays: {
      eyebrow: "// REUNIONES DOMINICALES", title: ["Ven a adorar.", "Ven tal como eres."],
      intro: "Nos reunimos cada domingo en 2439 Creston Avenue para adoración congregacional en español e inglés.",
      spanish: "ESPAÑOL", english: "INGLÉS", what: "QUÉ ESPERAR",
      steps: [["01", "CANTOS"], ["02", "ORACIÓN PÚBLICA"], ["03", "OFRENDA"], ["04", "ENSEÑANZA DE LA PALABRA"], ["05", "BENDICIÓN FINAL"]],
      expect: "Vístete como te sientas cómodo. Queremos un ambiente de adoración y familia, con un ministerio seguro y atractivo para niños desde preescolar hasta 5.º grado.",
      arrive: "CÓMO LLEGAR", transit: "A poca distancia de los trenes D y 4 y de autobuses principales en Fordham Road. Hay estacionamiento en la calle y un lote cercano alrededor de 192nd Street y Jerome Avenue.",
      directions: "CÓMO LLEGAR", livestream: "VER EN VIVO",
    },
    contact: {
      eyebrow: "// CONTACTO", title: ["Empieza una", "conversación."],
      intro: "¿Preguntas sobre visitar, conectarte o dar un próximo paso? Queremos ayudarte a encontrar un buen lugar para comenzar.",
      options: [["VISITA FCC", "Planea un domingo y encuentra direcciones.", "#/sundays"], ["CITY LINK", "Para grupos City Link, contacta a Andrea.", "mailto:andrea@fccbronx.org"], ["CONTACTO GENERAL", "Usa el formulario actual de FCC para otras preguntas.", "https://www.fccbronx.org/contact"]],
      note: "CONTACTO CITY LINK", email: "andrea@fccbronx.org",
    },
    building: {
      eyebrow: "// CAMPAÑA DEL EDIFICIO", title: ["Un hogar para", "la obra del Evangelio."],
      intro: "FCC desea ver el Bronx lleno de iglesias saludables centradas en el Evangelio y ve un edificio permanente como una herramienta para impulsar el ministerio.",
      ask: "LA META", partners: "1,000", amount: "$5,000", partnersLabel: "COLABORADORES", amountLabel: "CADA UNO",
      line: "Una iglesia. Un condado. Una herramienta a largo plazo para el ministerio del Evangelio.", learn: "CONOCER LA CAMPAÑA DEL EDIFICIO",
    },
    give: {
      eyebrow: "// GENEROSIDAD", title: ["Da para", "la obra del Evangelio."],
      intro: "Las ofrendas apoyan el ministerio y la misión de Fordham Community Church mientras buscamos formar una familia del Reino que muestra el amor de Jesús en el Bronx.",
      ministry: "OFRENDA GENERAL", ministryCopy: "Apoya el ministerio y la misión continua de FCC.", give: "DAR EN LÍNEA",
      building: "CAMPAÑA DEL EDIFICIO", buildingCopy: "Colabora hacia un hogar permanente para el ministerio del Evangelio en el Bronx.", buildingCta: "VER CAMPAÑA",
    },
  },
};

function ArrowIcon({ direction = "upRight" }) {
  const rotation = { right: 0, left: 180, upRight: -45 }[direction] ?? -45;
  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ "--arrow-rotation": `${rotation}deg` }}>
    <path d="M2.5 8h9" /><path d="M8.5 4.5 12 8l-3.5 3.5" />
  </svg>;
}

function Header({ lang, onLanguage, shared }) {
  return <header className="interior-header full-interior-header">
    <a className="interior-brand" href={import.meta.env.BASE_URL} aria-label={shared.home}>
      <img src={asset("fcc-mark.png")} alt="" /><span>{shared.church}</span>
    </a>
    <nav className="interior-nav full-interior-nav" aria-label="FCC pages">
      {ROUTES.map(([slug, label]) => <a href={`#/${slug}`} key={slug}>{label}</a>)}
    </nav>
    <div className="interior-actions">
      <div className="language-switch" role="group" aria-label={shared.language}>
        {["en","es"].map(code => <button type="button" key={code} className={lang===code?"active":""} aria-pressed={lang===code} onClick={() => onLanguage(code)}>{code.toUpperCase()}</button>)}
      </div>
      <a className="interior-home" href={import.meta.env.BASE_URL}>{shared.home}<ArrowIcon direction="left" /></a>
    </div>
  </header>;
}

function Footer({ shared }) {
  return <footer className="interior-footer full-interior-footer">
    <img src={asset("fcc-mark.png")} alt="" />
    <nav className="interior-footer-links">
      <a href="#/contact">CONTACT</a><a href="#/building">BUILDING</a><a href="#/give">GIVE</a>
    </nav>
    <span>{shared.address}</span>
    <a href={import.meta.env.BASE_URL}>{shared.home}<ArrowIcon direction="left" /></a>
  </footer>;
}

function GenericHero({ copy, children, className="" }) {
  return <section className={`interior-hero more-hero ${className}`}>
    <div className="interior-hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title[0]}<br/><em>{copy.title[1]}</em></h1><p className="interior-lead">{copy.intro}</p></div>
    {children}
  </section>;
}

function AboutPage({ copy }) {
  return <main className="interior-main about-page">
    <GenericHero copy={copy} className="about-hero"><img className="about-branch-art" src={asset("branch-ink.png")} alt="" /></GenericHero>
    <section className="interior-section about-values">
      <div className="interior-section-label"><span>01</span><span>{copy.practice}</span></div>
      <div className="about-value-grid">{copy.values.map(([title, body],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{body}</p></article>)}</div>
    </section>
    <section className="about-practices interior-section">
      <blockquote>{copy.quote}</blockquote>
      <div className="practice-links">{copy.two.map(([title,body],i)=><a href={i===0?"#/sundays":"#/city-link"} key={title}><span>{title}</span><p>{body}</p><ArrowIcon /></a>)}</div>
    </section>
    <section className="about-deeper interior-section"><span>{copy.explore}</span><a href="#/beliefs">{copy.beliefs}<ArrowIcon /></a><a href="#/team">{copy.team}<ArrowIcon /></a></section>
  </main>;
}

function BeliefsPage({ copy }) {
  return <main className="interior-main beliefs-page">
    <GenericHero copy={copy} className="beliefs-hero"><div className="belief-cross" aria-hidden="true"><span/><span/></div></GenericHero>
    <section className="interior-section doctrine-section">
      <div className="interior-section-label"><span>01</span><span>{copy.core}</span></div>
      <div className="doctrine-list">{copy.items.map(([n,title,body])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{body}</p></article>)}</div>
      <a className="archive-link doctrine-full" href="https://www.fccbronx.org/what-we-believe" target="_blank" rel="noreferrer">{copy.full}<ArrowIcon /></a>
    </section>
  </main>;
}

function TeamPage({ copy }) {
  return <main className="interior-main team-page">
    <GenericHero copy={copy} className="team-hero"><div className="team-word" aria-hidden="true">FCC</div></GenericHero>
    <section className="interior-section">
      <div className="interior-section-label"><span>01</span><span>{copy.groups}</span></div>
      <div className="team-grid">{copy.people.map(([name,role,bio,image],i)=><article className="team-card" key={name}>
        <div className="team-photo"><img src={image} alt={name} loading="lazy"/><span>0{i+1}</span></div>
        <div className="team-meta"><small>{role}</small><h2>{name}</h2><p>{bio}</p></div>
      </article>)}</div>
    </section>
  </main>;
}

function SundaysPage({ copy }) {
  return <main className="interior-main sundays-page">
    <GenericHero copy={copy} className="sundays-hero"><img className="sundays-photo" src={asset("fcc-worship.webp")} alt="" /></GenericHero>
    <section className="service-times interior-section">
      <a href="#/fcc-kids"><small>{copy.spanish}</small><strong>9:45 AM</strong><span>2439 CRESTON AVE</span><ArrowIcon /></a>
      <a href="#/fcc-kids"><small>{copy.english}</small><strong>11:45 AM</strong><span>2439 CRESTON AVE</span><ArrowIcon /></a>
    </section>
    <section className="interior-section sunday-expect">
      <div className="interior-section-label"><span>01</span><span>{copy.what}</span></div>
      <div className="expect-grid"><div>{copy.steps.map(([n,label])=><div className="expect-step" key={n}><span>{n}</span><strong>{label}</strong></div>)}</div><p>{copy.expect}</p></div>
    </section>
    <section className="arrival-band interior-section"><div><p className="eyebrow">// {copy.arrive}</p><h2>{copy.arrive}</h2></div><div><p>{copy.transit}</p><div className="arrival-actions"><a href="https://www.google.com/maps/dir/?api=1&destination=2439+Creston+Avenue+Bronx+NY+10468" target="_blank" rel="noreferrer">{copy.directions}<ArrowIcon /></a><a href="https://www.youtube.com/channel/UCt1xhWX4lXxAm6qKemmmhKw" target="_blank" rel="noreferrer">{copy.livestream}<ArrowIcon /></a></div></div></section>
  </main>;
}

function ContactPage({ copy }) {
  return <main className="interior-main contact-page">
    <GenericHero copy={copy} className="contact-hero"><div className="contact-rings" aria-hidden="true"><span/><span/><span/></div></GenericHero>
    <section className="interior-section contact-options">{copy.options.map(([title,body,href],i)=><a key={title} href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined}><span>0{i+1}</span><div><h2>{title}</h2><p>{body}</p></div><ArrowIcon /></a>)}</section>
    <section className="contact-note"><span>{copy.note}</span><a href={`mailto:${copy.email}`}>{copy.email}</a></section>
  </main>;
}

function BuildingPage({ copy }) {
  return <main className="interior-main building-page">
    <GenericHero copy={copy} className="building-hero"><div className="building-outline" aria-hidden="true"><span/><span/><span/><span/></div></GenericHero>
    <section className="campaign-ask interior-section">
      <div className="interior-section-label"><span>01</span><span>{copy.ask}</span></div>
      <div className="campaign-numbers"><div><strong>{copy.partners}</strong><span>{copy.partnersLabel}</span></div><span className="campaign-x">×</span><div><strong>{copy.amount}</strong><span>{copy.amountLabel}</span></div></div>
      <p>{copy.line}</p>
      <a className="ink-button button-arrow" href="https://fccbuildfund.netlify.app/" target="_blank" rel="noreferrer"><span>{copy.learn}</span><ArrowIcon /></a>
    </section>
  </main>;
}

function GivePage({ copy }) {
  return <main className="interior-main give-page">
    <GenericHero copy={copy} className="give-hero-more"><div className="give-orbit" aria-hidden="true"><span>FCC</span></div></GenericHero>
    <section className="give-options interior-section">
      <article><span>01</span><h2>{copy.ministry}</h2><p>{copy.ministryCopy}</p><a href="https://www.fccbronx.org/give" target="_blank" rel="noreferrer">{copy.give}<ArrowIcon /></a></article>
      <article><span>02</span><h2>{copy.building}</h2><p>{copy.buildingCopy}</p><a href="#/building">{copy.buildingCta}<ArrowIcon /></a></article>
    </section>
  </main>;
}

export function MoreInteriorPage({ route, lang, onLanguage }) {
  const t = COPY[lang] ?? COPY.en;
  const copy = t[route] ?? t.about;
  const titles = { about:"About", beliefs:"What We Believe", team:"Team", sundays:"Sunday Gatherings", contact:"Contact", building:"Building Campaign", give:"Give" };

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = `${titles[route] ?? "Fordham Community Church"} — Fordham Community Church`;
    return () => { document.title = "Fordham Community Church"; };
  }, [route]);

  return <div className={`interior-shell more-interior interior-${route}`}>
    <Header lang={lang} onLanguage={onLanguage} shared={t.shared}/>
    {route==="about" && <AboutPage copy={copy}/>}
    {route==="beliefs" && <BeliefsPage copy={copy}/>}
    {route==="team" && <TeamPage copy={copy}/>}
    {route==="sundays" && <SundaysPage copy={copy}/>}
    {route==="contact" && <ContactPage copy={copy}/>}
    {route==="building" && <BuildingPage copy={copy}/>}
    {route==="give" && <GivePage copy={copy}/>}
    <Footer shared={t.shared}/>
  </div>;
}
