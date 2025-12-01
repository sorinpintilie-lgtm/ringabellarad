import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section
        className="services-hero hero-section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="services-shell">
          <div className="services-hero-inner">
            <div className="services-hero-copy">
              <h1 className="services-hero-title">
                Serviciile noastre
              </h1>

              <p className="services-hero-subtitle">
                Activități educative, distractive și sigure pentru copiii dumneavoastră
              </p>

              <div className="services-hero-actions">
                <Link
                  to="/contact"
                  className="services-button services-button--primary"
                >
                  Programează o vizită
                </Link>
                <Link
                  to="/galerie"
                  className="services-button services-button--ghost"
                >
                  Vezi galeria
                </Link>
              </div>
            </div>

            <div className="services-hero-media" aria-hidden="true">
              <div className="services-hero-photo-frame">
                <img
                  className="services-hero-photo"
                  src="/galerie/IMG_6314.jpg"
                  alt="Copiii învață cuvinte noi"
                  style={{objectPosition: 'center 30%'}}
                />
                <div className="services-hero-label">
                  Învățare distractivă
                </div>
              </div>

              {/* Floating cute elements repositioned around hero */}
              <div className="services-hero-floating">
                <img
                  src="/childrenpart/inghetata.png"
                  alt="Înghețată"
                  className="services-hero-icon hero-float--L1 friendly-icecream"
                />
                <img
                  src="/childrenpart/minge.png"
                  alt="Minge"
                  className="services-hero-icon hero-float--R1 friendly-ball"
                />
                <img
                  src="/childrenpart/racheta .png"
                  alt="Rachetă"
                  className="services-hero-icon hero-float--L2 friendly-rocket"
                />
                <img
                  src="/childrenpart/capsuna.png"
                  alt="Căpșună"
                  className="services-hero-icon hero-float--R2 friendly-strawberry"
                />
                <img
                  src="/childrenpart/lubenita.png"
                  alt="Lubeniță"
                  className="services-hero-icon hero-float--L3 friendly-watermelon"
                />
                <img
                  src="/childrenpart/floare albastra.png"
                  alt="Floare albastră"
                  className="services-hero-icon hero-float--R3 friendly-blueflower"
                />
                <img
                  src="/childrenpart/buburuza .png"
                  alt="Buburuză"
                  className="services-hero-icon hero-float--B1 friendly-ladybug"
                />
                <img
                  src="/childrenpart/umbrela.png"
                  alt="Umbrelă"
                  className="services-hero-icon hero-float--B3 friendly-umbrella"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programele noastre */}
      <section className="services-programs">
        <div className="container">
          <h2>Programele noastre</h2>
          <p className="section-intro">
            La Ringabell, am gândit programe adaptate vârstei și nevoilor fiecărui copil,
            astfel încât cei mici să se simtă în siguranță, încurajați și implicați
            în activități potrivite pentru ei.
          </p>

          <div className="age-groups-grid">
            <article className="age-group-card">
              <h3>Grupa mică</h3>
              <p>
                Primele explorări, primele prietenii și multă joacă ghidată, într-un mediu
                liniștit și foarte atent supravegheat.
              </p>
            </article>

            <article className="age-group-card">
              <h3>Grupa mijlocie</h3>
              <p>
                Activități care dezvoltă limbajul, creativitatea și autonomia, prin jocuri,
                povești, muzică și experimente simple.
              </p>
            </article>

            <article className="age-group-card">
              <h3>Grupa mare / pregătitoare</h3>
              <p>
                Pregătire blândă pentru școală, cu accent pe gândire critică, colaborare
                și încredere în sine.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Grupe de vârstă */}
      <section className="services-ages">
        <div className="container">
          <h2>Grupe de vârstă</h2>
          <div className="ages-timeline">
            <div className="age-item">
              <span className="age-badge">2–3 ani</span>
              <div>
                <h3>Primele descoperiri</h3>
                <p>
                  Ne concentrăm pe rutină, siguranță emoțională și explorare senzorială:
                  jocuri simple, muzică, mișcare și multă conectare cu adultul.
                </p>
              </div>
            </div>

            <div className="age-item">
              <span className="age-badge">3–4 ani</span>
              <div>
                <h3>Curiozitate și limbaj</h3>
                <p>
                  Îi ajutăm pe copii să pună întrebări, să povestească, să își exprime
                  emoțiile și să se joace împreună în mod armonios.
                </p>
              </div>
            </div>

            <div className="age-item">
              <span className="age-badge">4–6 ani</span>
              <div>
                <h3>Pregătire pentru școală</h3>
                <p>
                  Activități care dezvoltă atenția, logica, motricitatea fină și
                  încrederea în propriile idei, într-un mod blând și jucăuș.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii suplimentare */}
      <section className="services-extra">
        <div className="container">
          <h2>Servicii suplimentare</h2>
          <div className="services-extra-shell">
            <ul className="services-extra-list">
              <li className="services-extra-item item-1">
                <div className="services-extra-icon" aria-hidden="true">⏰</div>
                <div className="services-extra-body">
                  <h3>Opțiuni de program prelungit</h3>
                  <p>
                    Pentru părinții care au nevoie de mai multă flexibilitate, oferim
                    variante de program extins, în funcție de nevoile familiei.
                  </p>
                </div>
              </li>
              <li className="services-extra-item item-2">
                <div className="services-extra-icon" aria-hidden="true">🎨</div>
                <div className="services-extra-body">
                  <h3>Ateliere tematice</h3>
                  <p>
                    Ateliere de artă, muzică, teatru sau știință, gândite să completeze
                    programul zilnic într-un mod creativ.
                  </p>
                </div>
              </li>
              <li className="services-extra-item item-3">
                <div className="services-extra-icon" aria-hidden="true">💬</div>
                <div className="services-extra-body">
                  <h3>Comunicare constantă cu părinții</h3>
                  <p>
                    Ținem legătura cu părinții prin feedback regulat, poze și informații
                    despre activitățile copiilor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
        style={{background: 'rgba(191, 225, 255, 0.2)', position: 'relative', overflow: 'hidden'}}
      >
        <div className="floating-elements">
          <img src="/childrenpart/inghetata.png" alt="Înghețată" className="floating-element" style={{width: '50px', height: '50px', top: '15%', left: '8%'}} />
          <img src="/childrenpart/minge.png" alt="Minge" className="floating-element" style={{width: '55px', height: '55px', top: '25%', right: '12%'}} />
          <img src="/childrenpart/racheta .png" alt="Rachetă" className="floating-element" style={{width: '45px', height: '45px', bottom: '15%', left: '20%'}} />
          <img src="/childrenpart/capsuna.png" alt="Căpșună" className="floating-element" style={{width: '60px', height: '60px', bottom: '10%', right: '8%'}} />
        </div>
        <div className="container text-center">
          <h2 className="section-title">Zi gratuită de test</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--gray-600)'}}>
            Beneficiază de o zi gratuită de încercare pentru a cunoaște atmosfera Ringabell.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Programează o vizită
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;