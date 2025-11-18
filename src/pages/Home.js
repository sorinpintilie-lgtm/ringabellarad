import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  // Sticky + scroll-in animations for "Educație / Joacă / Siguranță" cards
  const whyCardsRef = useRef([]);

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
          className="home-hero"
          data-reveal="up"
          data-reveal-once="true"
        >
          <div className="home-shell">
            <div className="home-hero-inner">
              <div className="home-hero-copy">
                <div className="home-hero-eyebrow">
                  <span className="home-hero-eyebrow-dot" />
                  <span>Centru pentru copii în Arad</span>
                </div>

                <h1 className="home-hero-title">
                  Ringabell, locul copiilor fericiți
                </h1>

                <p className="home-hero-subtitle">
                  Centru modern pentru copii în Arad, cu activități colorate,
                  sigure și pline de bucurie în fiecare zi.
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
                    src="/galerie/nursery-children-having-fun-and-playing-with-teach-2025-03-14-21-42-40-utc-min.jpg"
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
                    className="home-hero-icon home-hero-icon--unicorn friendly-unicorn"
                  />
                  <img
                    src="/childrenpart/soare test .png"
                    alt="Soare"
                    className="home-hero-icon home-hero-icon--sun friendly-sun"
                  />
                  <img
                    src="/childrenpart/inima.png"
                    alt="Inimă"
                    className="home-hero-icon home-hero-icon--heart friendly-heart"
                  />
                  <img
                    src="/childrenpart/fluture.png"
                    alt="Fluture"
                    className="home-hero-icon home-hero-icon--butterfly friendly-butterfly"
                  />
                  <img
                    src="/childrenpart/balon cu aer cald.png"
                    alt="Balon cu aer cald"
                    className="home-hero-icon home-hero-icon--balloon friendly-balloon"
                  />
                  <img
                    src="/childrenpart/curcubeu peste nori.png"
                    alt="Curcubeu"
                    className="home-hero-icon home-hero-icon--rainbow friendly-moon"
                  />
                  <img
                    src="/childrenpart/pisica.png"
                    alt="Pisică"
                    className="home-hero-icon home-hero-icon--cat friendly-cat"
                  />
                  <img
                    src="/childrenpart/iepuras.png"
                    alt="Iepuraș"
                    className="home-hero-icon home-hero-icon--bunny friendly-bunny"
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
                <div className="home-stat-number">500+</div>
                <div className="home-stat-label">Familii care ne-au ales</div>
              </article>

              <article className="home-stat-card">
                <div className="home-stat-number">4</div>
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
              <p className="home-section-note">
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

                  {/* Siguranță – slides in again from the left on scroll */}
                  <article
                    ref={(el) => (whyCardsRef.current[2] = el)}
                    className="home-feature-card js-why-card js-why-card--left"
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
                    src="/childrenpart/dinozaur.png"
                    alt="Dinozaur"
                    className="home-why-card home-why-card--2"
                  />
                  <img
                    src="/childrenpart/inima.png"
                    alt="Inimă"
                    className="home-why-card home-why-card--3"
                  />
                </div>
              </div>
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
              <p className="home-section-note">
                De la experimente științifice pe înțelesul lor, până la joacă
                afară și ateliere de creație, fiecare zi are un ritm colorat.
              </p>
            </header>

            <div className="home-activities-grid">
              <article className="home-activity-main">
                <img
                  src="/galerie/chemical-experiment-on-kids-birthday-party-2024-09-16-16-13-21-utc-min.jpg"
                  alt="Experimente pentru copii"
                />
                <div className="home-activity-main-body">
                  <span className="home-activity-badge">
                    Activitatea zilei
                  </span>
                  <h3 className="home-activity-title">
                    Știință pe înțelesul copiilor
                  </h3>
                  <p className="home-activity-text">
                    Experimente sigure și haioase, prin care cei mici învață
                    lucruri noi în timp ce se distrează.
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
                    src="/childrenpart/dinozaur.png"
                    alt="Ateliere de creație"
                  />
                  <div>
                    <h4>Ateliere de creație</h4>
                    <p>Desen, culoare și lucruri făcute cu mânuțele lor.</p>
                  </div>
                </article>

                <article className="home-activity-mini">
                  <img
                    src="/galerie/portrait-of-a-teacher-and-kids-in-a-classroom-wher-2025-01-11-01-29-20-utc-min.jpg"
                    alt="Povești și joacă de rol"
                  />
                  <div>
                    <h4>Povești și joacă de rol</h4>
                    <p>Copiii intră în roluri și învață prin joc.</p>
                  </div>
                </article>

                <article className="home-activity-mini">
                  <img
                    src="/galerie/nursery-children-having-fun-and-playing-with-teach-2025-03-14-21-42-40-utc-min.jpg"
                    alt="Mișcare și aer curat"
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
              <p className="home-section-note">
                O echipă de profesioniști care știe să combine joaca, educația
                și atenția pentru fiecare copil.
              </p>
            </header>

            <div className="home-team-grid">
              <article className="home-team-card">
                <div className="home-team-avatar">
                  <img
                    src="/childrenpart/fata.png"
                    alt="Prof. Ana Popescu"
                  />
                </div>
                <h3 className="home-team-name">Prof. Ana Popescu</h3>
                <p className="home-team-role">Director educațional</p>
                <span className="home-team-tag">Pedagogie</span>
              </article>

              <article className="home-team-card">
                <div className="home-team-avatar">
                  <img
                    src="/childrenpart/baiat.png"
                    alt="Prof. Mihai Ionescu"
                  />
                </div>
                <h3 className="home-team-name">Prof. Mihai Ionescu</h3>
                <p className="home-team-role">Psiholog copii</p>
                <span className="home-team-tag">Dezvoltare</span>
              </article>

              <article className="home-team-card">
                <div className="home-team-avatar">
                  <img
                    src="/childrenpart/copacel.png"
                    alt="Prof. Elena Radu"
                  />
                </div>
                <h3 className="home-team-name">Prof. Elena Radu</h3>
                <p className="home-team-role">Educatoare</p>
                <span className="home-team-tag">Creativitate</span>
              </article>

              <article className="home-team-card">
                <div className="home-team-avatar">
                  <img
                    src="/childrenpart/fluture.png"
                    alt="Prof. Maria Georgescu"
                  />
                </div>
                <h3 className="home-team-name">Prof. Maria Georgescu</h3>
                <p className="home-team-role">Terapeut ocupațional</p>
                <span className="home-team-tag">Motricitate</span>
              </article>
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
              <p className="home-section-note">
                Imagini reale din activitățile zilnice – zâmbete, joacă și timp
                de calitate petrecut împreună.
              </p>
            </header>

            <div className="home-gallery-strip">
              <div className="home-gallery-grid">
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/cheerful-teacher-and-interracial-kids-looking-at-c-2024-11-08-18-59-50-utc-min.jpg"
                    alt="Copii fericiți alături de educatoare"
                  />
                </figure>
                <figure className="home-gallery-item home-gallery-item--tall">
                  <img
                    src="/childrenpart/dinozaur.png"
                    alt="Învățare distractivă"
                  />
                </figure>
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/mother-sitting-with-two-children-having-discussio-2025-04-04-17-34-34-utc-min.jpg"
                    alt="Moment de familie"
                  />
                </figure>
                <figure className="home-gallery-item">
                  <img
                    src="/galerie/nursery-children-having-fun-and-playing-with-teach-2025-03-14-21-42-40-utc-min.jpg"
                    alt="Joacă în grup"
                  />
                </figure>
              </div>
            </div>

            <div className="home-gallery-caption-row">
              <p className="home-gallery-caption">
                Fiecare fotografie surprinde câte o poveste mică: un joc
                nou, o prietenie, un moment de descoperire.
              </p>
              <Link
                to="/galerie"
                className="home-button home-button--ghost home-button--small"
              >
                Vezi galeria completă
              </Link>
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
              <p className="home-section-note">
                Programe adaptate vârstei, pentru grădiniță, after school și
                evenimente speciale pentru întreaga familie.
              </p>
            </header>

            <div className="home-services-grid">
              <article className="home-service-card">
                <div className="home-service-icon" aria-hidden="true">KID</div>
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
                <div className="home-service-icon" aria-hidden="true">SCO</div>
                <h3 className="home-service-title">After school cu liniște și joacă</h3>
                <p className="home-service-text">
                  După ore, copiii își fac temele într-un ritm blând, apoi
                  rămân la joacă, povești și activități creative.
                </p>
                <ul className="home-service-list">
                  <li>Ajutor la teme și recapitulare ușoară</li>
                  <li>Ateliere de lectură, jocuri de echipă</li>
                  <li>Gustare și timp de relaxare după școală</li>
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
                <div className="home-service-icon" aria-hidden="true">FUN</div>
                <h3 className="home-service-title">Petreceri & evenimente colorate</h3>
                <p className="home-service-text">
                  Zile de naștere, seri tematice și întâlniri speciale pentru
                  copii și părinți, într-un decor de poveste.
                </p>
                <ul className="home-service-list">
                  <li>Petreceri personalizate pentru copii</li>
                  <li>Teme jucăușe și decoruri colorate</li>
                  <li>Activități ghidate de echipa Ringabell</li>
                </ul>
                <div className="home-service-cta">
                  <Link
                    to="/servicii"
                    className="home-button home-button--ghost home-button--small"
                  >
                    Rezervă un eveniment
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
              <p className="home-section-note">
                Feedback real de la familiile care ne trec zilnic pragul și ne
                încredințează copiii.
              </p>
            </header>

            <div className="home-testimonials-layout">
              <article className="home-testimonial-main">
                <p>
                  Copilul nostru vine acasă în fiecare zi cu povești frumoase și
                  mult entuziasm despre ce a făcut la Ringabell.
                </p>
                <div className="home-testimonial-author">
                  <div className="home-testimonial-avatar">
                    <img
                      src="/childrenpart/inima.png"
                      alt="Părinte Ringabell"
                    />
                  </div>
                  <div className="home-testimonial-meta">
                    <h4>Maria Popescu</h4>
                    <span>Părinte Ringabell</span>
                  </div>
                </div>
              </article>

              <div className="home-testimonial-side">
                <article className="home-testimonial-side-card">
                  <p>
                    Echipa este atentă, calmă și comunică des cu noi. Ne simțim
                    în siguranță când copilul este aici.
                  </p>
                  <h4>Ionuț Dumitrescu</h4>
                </article>

                <article className="home-testimonial-side-card">
                  <p>
                    Spațiul este curat, colorat și bine organizat. Copiii se
                    simt bine primiți încă de la intrare.
                  </p>
                  <h4>Elena Radu</h4>
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
                  Programăm o zi de probă pentru copilul tău, astfel încât să
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