import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  // Sticky + scroll-in animations for "Educație / Joacă / Siguranță" cards
  const whyCardsRef = useRef([]);

  // Team carousel refs and state
  const teamScrollerRef = useRef(null);
  const teamItemsRef = useRef([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const teamMembers = [
    {
      name: "Prof. Clep Diana",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Dan Larisa",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Gherle Atenais",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Hrișcă Daniela",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Șooș Daniela",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Zharie Mădălina",
      role: "Ajutor / Întreținere",
      tag: "Întreținere",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Calancea Foarea",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Dolha Mariana",
      role: "Educatoare",
      tag: "Educatie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Izabela Opitz",
      role: "Limba germană",
      tag: "Limbi straine",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Psiholog Anca Mureșan",
      role: "Atelier Dezvoltare personală",
      tag: "Psihologie",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Prof. Gabriel Siminic",
      role: "Educație fizică",
      tag: "Sport",
      avatar: "/childrenpart/baiat.png"
    },
    {
      name: "Prof. Marcel Spâncu",
      role: "Atelier de percuție",
      tag: "Arta",
      avatar: "/childrenpart/baiat.png"
    },
    {
      name: "Prof. Ileana Szabo",
      role: "Atelier arte plastice",
      tag: "Arta",
      avatar: "/childrenpart/fata.png"
    },
    {
      name: "Carina Ianc",
      role: "Logoped",
      tag: "Logopedie",
      avatar: "/childrenpart/fata.png"
    }
  ];

  // Team carousel functions
  const scrollToTeamItem = (index) => {
    if (teamScrollerRef.current) {
      const itemWidth = teamItemsRef.current[0]?.offsetWidth || 340;
      const gap = 32; // 2rem in pixels
      teamScrollerRef.current.scrollLeft = index * (itemWidth + gap);
      setCurrentTeamIndex(index);
    }
  };

  const nextTeamItem = () => {
    const nextIndex = Math.min(currentTeamIndex + 1, 11); // Stop at index 11 (12th card)
    scrollToTeamItem(nextIndex);
  };

  const prevTeamItem = () => {
    const prevIndex = currentTeamIndex === 0 ? teamMembers.length - 1 : currentTeamIndex - 1;
    scrollToTeamItem(prevIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (teamScrollerRef.current) {
        const scrollLeft = teamScrollerRef.current.scrollLeft;
        const itemWidth = teamItemsRef.current[0]?.offsetWidth || 340;
        const gap = 32;
        const newIndex = Math.round(scrollLeft / (itemWidth + gap));
        setCurrentTeamIndex(Math.min(Math.max(newIndex, 0), teamMembers.length - 1));
      }
    };

    const scroller = teamScrollerRef.current;
    if (scroller) {
      scroller.addEventListener('scroll', handleScroll);
      return () => scroller.removeEventListener('scroll', handleScroll);
    }
  }, [teamMembers.length]);

  useEffect(() => {
    const cards = whyCardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('home-why-card-visible');
          } else {
            el.classList.remove('home-why-card-visible');
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <main>
        {/* HERO – NEW LAYOUT WITH SPLIT COPY / IMAGE */}
        <section
          className="home-hero hero-section"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <div className="home-hero-inner">
              <div className="home-hero-copy">
                <h1 className="home-hero-title">
                  Acomodare blândă la întrarea in colectivitate
                </h1>

                <p className="home-hero-subtitle">
                  Un loc în care copilul tău crește cu <span className="home-hero-highlight">zâmbetul</span> pe buze.
                </p>

                <div className="home-hero-actions">
                  <Link
                    to="/contact"
                    className="home-button home-button--primary"
                  >
                    Programează o vizită
                  </Link>
                  <Link
                    to="/despre-noi"
                    className="home-button home-button--ghost"
                  >
                    Află cine suntem
                  </Link>
                </div>
              </div>

              <div className="home-hero-media" aria-hidden="true">
                <div className="home-hero-photo-frame">
                  <img
                    className="home-hero-photo"
                    src="/galerie/IMG_6321.jpg"
                    alt="Copii jucându-se cu educatoarea"
                  />
                  <div className="home-hero-label">
                    Zâmbete în fiecare zi la Ringabell
                  </div>
                </div>

                {/* Floating cute elements repositioned around hero */}
                <div className="home-hero-floating">
                  <img
                    src="/childrenpart/unicorn.png"
                    alt="Unicorn"
                    className="home-hero-icon hero-float--L1 friendly-unicorn"
                  />
                  <img
                    src="/childrenpart/soare test .png"
                    alt="Soare"
                    className="home-hero-icon hero-float--R1 friendly-sun"
                  />
                  <img
                    src="/childrenpart/inima.png"
                    alt="Inimă"
                    className="home-hero-icon hero-float--L2 friendly-heart"
                  />
                  <img
                    src="/childrenpart/fluture.png"
                    alt="Fluture"
                    className="home-hero-icon hero-float--R2 friendly-butterfly"
                  />
                  <img
                    src="/childrenpart/balon cu aer cald.png"
                    alt="Balon cu aer cald"
                    className="home-hero-icon hero-float--L3 friendly-balloon"
                  />
                  <img
                    src="/childrenpart/curcubeu peste nori.png"
                    alt="Curcubeu"
                    className="home-hero-icon hero-float--R3 friendly-moon"
                  />
                  <img
                    src="/childrenpart/dinozaur.png"
                    alt="Dinozaur"
                    className="home-hero-icon hero-float--B1 friendly-dino"
                  />
                  <img
                    src="/childrenpart/camion.png"
                    alt="Camion"
                    className="home-hero-icon hero-float--B3 friendly-truck"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK STATS – COMPACT STRIP */}
        <section
          className="home-section home-stats"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <div className="home-stats-grid">
              <article className="home-stat-card">
                <div className="home-stat-number">100+</div>
                <div className="home-stat-label">Familii care ne-au ales</div>
              </article>

              <article className="home-stat-card">
                <div className="home-stat-number">8+</div>
                <div className="home-stat-label">Ani de experiență</div>
              </article>

              <article className="home-stat-card">
                <div className="home-stat-number">15</div>
                <div className="home-stat-label">Specialiști în echipă</div>
              </article>

              <article className="home-stat-card">
                <div className="home-stat-number">100%</div>
                <div className="home-stat-label">Atenție la siguranță</div>
              </article>
            </div>
          </div>
        </section>

        {/* WHY US – TEXT + FLOATING ICON CLUSTER */}
        <section
          className="home-section home-section--tight"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">De ce Ringabell</p>
                <h2 className="home-section-title">
                  De ce să ne alegeți pe noi?
                </h2>
              </div>
              <p className="home-section-note mobile-visible">
                Un spațiu gândit pentru copii și părinți deopotrivă: activități
                clare, joacă multă și proceduri de siguranță bine puse la punct.
              </p>
            </header>

            <div className="home-why-grid">
              {/* Sticky text + feature column */}
              <div className="home-why-text-col">
                <div className="home-feature-list">
                  {/* Educație – sticky column, slides in from the left on scroll */}
                  <article
                    ref={(el) => (whyCardsRef.current[0] = el)}
                    className="home-feature-card js-why-card js-why-card--left"
                  >
                    <div className="home-feature-icon">Educație</div>
                    <h3 className="home-feature-title">
                      Educație și dezvoltare
                    </h3>
                    <p className="home-feature-text">
                      Activități simple și clare, adaptate vârstei, care ajută
                      copiii să descopere lumea în ritmul lor.
                    </p>
                  </article>

                  {/* Joacă – slides in from the right on scroll */}
                  <article
                    ref={(el) => (whyCardsRef.current[1] = el)}
                    className="home-feature-card js-why-card js-why-card--right"
                  >
                    <div className="home-feature-icon">Joacă</div>
                    <h3 className="home-feature-title">Joacă și prietenie</h3>
                    <p className="home-feature-text">
                      Spații de joacă colorate și activități creative prin care
                      copiii își fac prieteni și se simt în siguranță.
                    </p>
                  </article>

                  {/* Creativitate – slides in from the left on scroll */}
                  <article
                    ref={(el) => (whyCardsRef.current[2] = el)}
                    className="home-feature-card js-why-card js-why-card--left"
                  >
                    <div className="home-feature-icon">Creativitate</div>
                    <h3 className="home-feature-title">
                      Creativitate fără limite
                    </h3>
                    <p className="home-feature-text">
                      Activități artistice și experiențe interactive care stimulează imaginația și exprimarea liberă.
                    </p>
                  </article>

                  {/* Siguranță – slides in from the right on scroll */}
                  <article
                    ref={(el) => (whyCardsRef.current[3] = el)}
                    className="home-feature-card js-why-card js-why-card--right"
                  >
                    <div className="home-feature-icon">Siguranță</div>
                    <h3 className="home-feature-title">
                      Siguranță și grijă
                    </h3>
                    <p className="home-feature-text">
                      Echipă prezentă permanent, proceduri clare și spații
                      curate, astfel încât părinții pot sta liniștiți.
                    </p>
                  </article>
                </div>
              </div>

              <div className="home-why-visual" aria-hidden="true">
                <div className="home-why-floating">
                  <img
                    src="/childrenpart/unicorn.png"
                    alt="Unicorn"
                    className="home-why-card home-why-card--1"
                  />
                  <img
                    src="/childrenpart/inima.png"
                    alt="Inimă"
                    className="home-why-card home-why-card--2"
                  />
                  <img
                    src="/childrenpart/dinozaur.png"
                    alt="Dinozaur"
                    className="home-why-card home-why-card--3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O ZI LA RINGABELL – DAILY ROUTINE */}
        <section className="home-section home-day">
          <div className="home-shell">
            <div className="home-section-heading home-day-heading">
              <div>
                <p className="home-section-kicker">Rutina noastră</p>
                <h2 className="home-section-title">O zi la Ringabell</h2>
              </div>
              <p className="home-section-note mobile-visible">
                Program gândit să le ofere copiilor un echilibru sănătos între masă, joacă, învățare și odihnă.
              </p>
            </div>

            <div className="home-day-grid">
              <article className="home-day-item">
                <div className="home-day-icon">🥣</div>
                <div className="home-day-content">
                  <h3 className="home-day-title">Mic dejun & gustări</h3>
                  <p className="home-day-text">
                    Începem ziua cu un mic dejun echilibrat și gustări sănătoase, adaptate vârstei copiilor.
                  </p>
                </div>
              </article>

              <article className="home-day-item">
                <div className="home-day-icon">🎨</div>
                <div className="home-day-content">
                  <h3 className="home-day-title">Activități educative</h3>
                  <p className="home-day-text">
                    Jocuri, povești și exerciții care dezvoltă limbajul, creativitatea și autonomia.
                  </p>
                </div>
              </article>

              <article className="home-day-item">
                <div className="home-day-icon">😴</div>
                <div className="home-day-content">
                  <h3 className="home-day-title">Timp de odihnă</h3>
                  <p className="home-day-text">
                    Un moment liniștit pentru somn sau relaxare, într-un spațiu sigur și confortabil.
                  </p>
                </div>
              </article>

              <article className="home-day-item">
                <div className="home-day-icon">🧸</div>
                <div className="home-day-content">
                  <h3 className="home-day-title">Joacă liberă</h3>
                  <p className="home-day-text">
                    Copiii explorează, construiesc prietenii și învață să împartă prin joacă liberă supravegheată.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ACTIVITIES – FEATURED + SHORT LIST */}
        <section
          className="home-section"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">Activități</p>
                <h2 className="home-section-title">
                  Activități care îi fac fericiți
                </h2>
              </div>
              <p className="home-section-note mobile-visible">
                De la experimente științifice pe înțelesul lor, până la joacă
                afară și ateliere de creație, fiecare zi are un ritm colorat.
              </p>
            </header>

            <div className="home-activities-grid">
              <article className="home-activity-main">
                <img
                  src="/galerie/IMG_6289.jpg"
                  alt="Băiat jucându-se cu rachetă colorată"
                  loading="lazy"
                />
                <div className="home-activity-main-body">
                  <span className="home-activity-badge">
                    Activitatea zilei
                  </span>
                  <h3 className="home-activity-title">
                    Joacă și explorare
                  </h3>
                  <p className="home-activity-text">
                    Activități distractive și creative care stimulează imaginația
                    și dezvoltarea motorie a copiilor.
                  </p>
                  <Link
                    to="/servicii"
                    className="home-button home-button--ghost home-button--small"
                  >
                    Vezi toate activitățile
                  </Link>
                </div>
              </article>

              <div className="home-activity-secondary">
                <article className="home-activity-mini">
                  <img
                    src="/galerie/IMG_6337.jpg"
                    alt="Ateliere de creație"
                    loading="lazy"
                  />
                  <div>
                    <h4>Ateliere de creație</h4>
                    <p>Desen, culoare și lucruri făcute cu mânuțele lor.</p>
                  </div>
                </article>

                <article className="home-activity-mini">
                  <img
                    src="/galerie/IMG_6301.jpg"
                    alt="Povești și joacă de rol"
                    loading="lazy"
                  />
                  <div>
                    <h4>Povești și joacă de rol</h4>
                    <p>Copiii intră în roluri și învață prin joc.</p>
                  </div>
                </article>

                <article className="home-activity-mini">
                  <img
                    src="/galerie/IMG_6387.jpg"
                    alt="Mișcare și aer curat"
                    loading="lazy"
                  />
                  <div>
                    <h4>Mișcare și aer curat</h4>
                    <p>Jocuri afară, alergare și energie consumată frumos.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM – GRID + SHORT NOTES */}
        <section
          className="home-section"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">Echipa</p>
                <h2 className="home-section-title">
                  Echipa care are grijă de copii
                </h2>
              </div>
              <p className="home-section-note mobile-visible">
                O echipă de profesioniști care știe să combine joaca, educația
                și atenția pentru fiecare copil.
              </p>
            </header>

            <div className="home-team-carousel">
              <div className="home-team-scroller" ref={teamScrollerRef}>
                {teamMembers.map((member, index) => (
                  <article
                    key={index}
                    className="home-team-card"
                    ref={(el) => (teamItemsRef.current[index] = el)}
                  >
                    <div className="home-team-avatar">
                      <img
                        src={member.avatar}
                        alt={member.name}
                      />
                    </div>
                    <h3 className="home-team-name">{member.name}</h3>
                    <p className="home-team-role">{member.role}</p>
                    <span className="home-team-tag">{member.tag}</span>
                  </article>
                ))}
              </div>

              <div className="home-team-navigation">
                <button
                  className="home-team-nav-btn home-team-prev"
                  onClick={prevTeamItem}
                  aria-label="Previous team member"
                >
                  ‹
                </button>

                <div className="home-team-dots">
                  {teamMembers.slice(0, 12).map((_, index) => (
                    <button
                      key={index}
                      className={`home-team-dot ${index === currentTeamIndex ? 'active' : ''}`}
                      onClick={() => scrollToTeamItem(index)}
                      aria-label={`Go to team member ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="home-team-nav-btn home-team-next"
                  onClick={nextTeamItem}
                  aria-label="Next team member"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="home-team-notes">
              <article className="home-team-note-card">
                <img
                  src="/childrenpart/iepuras.png"
                  alt="Iepuraș"
                />
                <p>Copii curioși și plini de energie, ghidați cu blândețe.</p>
              </article>
              <article className="home-team-note-card">
                <img
                  src="/childrenpart/pisica.png"
                  alt="Pisică"
                />
                <p>
                  Activități adaptate fiecărui copil, în ritmul și stilul lui.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* GALLERY PREVIEW – COMPACT STRIP */}
        <section
          className="home-section home-gallery"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">Galerie foto</p>
                <h2 className="home-section-title">
                  Câteva dintre momentele noastre
                </h2>
              </div>
              <p className="home-section-note mobile-visible">
                Imagini reale din activitățile zilnice – zâmbete, joacă și timp
                de calitate petrecut împreună.
              </p>
            </header>

            <div className="home-gallery-strip">
              <div className="home-gallery-grid">
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/IMG_6268.jpg"
                    alt="Moment de familie"
                    loading="lazy"
                  />
                </figure>
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/IMG_6272.jpg"
                    alt="Joacă în grup"
                    loading="lazy"
                  />
                </figure>
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/IMG_6277.jpg"
                    alt="Copii fericiți alături de educatoare"
                    loading="lazy"
                  />
                </figure>
              </div>

              {/* Floating elements in background */}
              <div className="home-gallery-floating" aria-hidden="true">
                <img
                  src="/childrenpart/unicorn.png"
                  alt="Unicorn"
                  className="home-gallery-float home-gallery-float--1"
                />
                <img
                  src="/childrenpart/inima.png"
                  alt="Inimă"
                  className="home-gallery-float home-gallery-float--2"
                />
                <img
                  src="/childrenpart/fluture.png"
                  alt="Fluture"
                  className="home-gallery-float home-gallery-float--3"
                />
                <img
                  src="/childrenpart/dinozaur.png"
                  alt="Dinozaur"
                  className="home-gallery-float home-gallery-float--4"
                />
                <img
                  src="/childrenpart/urs.png"
                  alt="Urs"
                  className="home-gallery-float home-gallery-float--5"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES – SHORT, 3 CARDS */}
        <section
          className="home-section"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">Servicii</p>
                <h2 className="home-section-title">
                  Ce oferim la Ringabell
                </h2>
              </div>
              <p className="home-section-note mobile-visible">
                Programe adaptate vârstei, pentru grădiniță, after school și
                evenimente speciale pentru întreaga familie.
              </p>
            </header>

            <div className="home-services-grid">
              <article className="home-service-card">
                <div className="home-service-icon" aria-hidden="true"></div>
                <h3 className="home-service-title">Grădiniță cu joacă și povești</h3>
                <p className="home-service-text">
                  Primii ani petrecuți într-un loc cald și colorat, cu rutine
                  liniștitoare, joacă ghidată și multă curiozitate.
                </p>
                <ul className="home-service-list">
                  <li>Grupuri mici și atenție individuală</li>
                  <li>Joacă și ateliere adaptate vârstei</li>
                  <li>Ritualuri de dimineață și de plecare liniștite</li>
                </ul>
                <div className="home-service-cta">
                  <Link
                    to="/servicii"
                    className="home-button home-button--primary home-button--small"
                  >
                    Detalii grădiniță
                  </Link>
                </div>
              </article>

              <article className="home-service-card">
                <div className="home-service-icon" aria-hidden="true"></div>
                <h3 className="home-service-title">Programe adaptate programului părinților</h3>
                <p className="home-service-text">
                  Alege varianta potrivită familiei tale — cu un program clar pentru copil și flexibilitate pentru tine.
                </p>
                <ul className="home-service-list">
                  <li>Program normal: până la 12:00</li>
                  <li>Program prelungit: până la 13:00</li>
                  <li>Program lung: până la 18:00</li>
                </ul>
                <div className="home-service-cta">
                  <Link
                    to="/servicii"
                    className="home-button home-button--ghost home-button--small"
                  >
                    Află mai mult
                  </Link>
                </div>
              </article>

              <article className="home-service-card">
                <div className="home-service-icon" aria-hidden="true"></div>
                <h3 className="home-service-title">Mese calde incluse</h3>
                <p className="home-service-text">
                  În programele mai lungi, copiii au mese calde și pauze de masă liniștite, într-un ritm potrivit vârstei.
                </p>
                <ul className="home-service-list">
                  <li>Program până la 13:00: prânz cald</li>
                  <li>Program până la 18:00: prânz cald</li>
                  <li>Meniu echilibrat, porții potrivite și adaptări la nevoi la cerere</li>
                </ul>
                <div className="home-service-cta">
                  <Link
                    to="/servicii"
                    className="home-button home-button--ghost home-button--small"
                  >
                    Alege programul potrivit
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS – SHORTENED, MOBILE FRIENDLY */}
        <section
          className="home-section home-testimonials"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <header className="home-section-heading">
              <div>
                <p className="home-section-kicker">Părinți</p>
                <h2 className="home-section-title">Ce spun părinții</h2>
              </div>
              <p className="home-section-note mobile-visible">
                Feedback real de la familiile care ne trec zilnic pragul și ne
                încredințează copiii.
              </p>
            </header>

            <div className="home-testimonials-layout">
              <div className="home-testimonial-main">
                <article className="home-testimonial-main-card">
                  <p>
                    O grădiniță absolut impecabilă cu un personal foarte bine pregătit si responsabil... Suntem foarte mulțumite si cu siguranță vă recomandăm cu mult drag..💝💝💝
                  </p>
                  <div className="home-testimonial-author">
                    <div className="home-testimonial-meta">
                      <h4>Florina Anny</h4>
                      <span>Părinte</span>
                    </div>
                  </div>
                </article>

                <article className="home-testimonial-main-card">
                  <p>O gradinita frumoasa,curata,foarte bine dotata,cu un personal responsabil care le ofera copiilor o educatie exemplara.</p>
                  <div className="home-testimonial-author">
                    <div className="home-testimonial-meta">
                      <h4>Pascu Vasile-Gelu</h4>
                      <span>Părinte</span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="home-testimonial-side">
                <article className="home-testimonial-side-card">
                  <p>
                    Fiica mea merge la grădiniță aici, un loc frumos, cu personal foarte amabil, un mediu prietenos și sigur. Îi place mult și este mereu fericită să vină.
                  </p>
                  <div className="home-testimonial-author desktop-hidden">
                    <div className="home-testimonial-meta">
                      <h4>Cosmin Levarda</h4>
                      <span>Părinte</span>
                    </div>
                  </div>
                </article>

                <article className="home-testimonial-side-card mobile-hidden">
                  <p>O grădiniță minunată</p>
                  <div className="home-testimonial-author">
                    <div className="home-testimonial-meta">
                      <h4>Betina Cohan</h4>
                      <span>Părinte</span>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="home-section home-cta"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <div className="home-cta-inner">
              <div>
                <h2 className="home-cta-title">Hai să ne cunoaștem mai bine</h2>
                <p className="home-cta-text">
                  Programăm o zi de adaptare pentru copilul tău, astfel încât să
                  vedeți împreună cum arată o zi la Ringabell.
                </p>
                <div className="home-cta-actions">
                  <Link
                    to="/contact"
                    className="home-button home-button--primary"
                  >
                    Programează o vizită
                  </Link>
                  <Link
                    to="/galerie"
                    className="home-button home-button--ghost"
                  >
                    Vezi mai multe imagini
                  </Link>
                </div>
              </div>

              <div className="home-cta-visual" aria-hidden="true">
                <img
                  src="/childrenpart/curcubeu peste nori.png"
                  alt="Curcubeu"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;