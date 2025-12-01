import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section
        className="about-hero hero-section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="about-shell">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <h1 className="about-hero-title">
                Despre Ringabell
              </h1>

              <p className="about-hero-subtitle">
                Povestea și misiunea noastră, din dragoste pentru copii.
              </p>

              <div className="about-hero-actions">
                <Link
                  to="/contact"
                  className="about-button about-button--primary"
                >
                  Contactează-ne
                </Link>
                <Link
                  to="/servicii"
                  className="about-button about-button--ghost"
                >
                  Vezi serviciile
                </Link>
              </div>
            </div>

            <div className="about-hero-media" aria-hidden="true">
              <div className="about-hero-photo-frame">
                <img
                  className="about-hero-photo"
                  src="/galerie/IMG_6347.jpg"
                  alt="Echipa Ringabell cu copiii"
                />
                <div className="about-hero-label">
                  Familia Ringabell
                </div>
              </div>

              {/* Floating cute elements repositioned around hero */}
              <div className="about-hero-floating">
                <img src="/childrenpart/casa.png"     className="about-hero-icon hero-float--L1" alt="" />
                <img src="/childrenpart/inima.png"    className="about-hero-icon hero-float--R1" alt="" />
                <img src="/childrenpart/iepuras.png"  className="about-hero-icon hero-float--L2" alt="" />
                <img src="/childrenpart/albina.png"   className="about-hero-icon hero-float--R2" alt="" />
                <img src="/childrenpart/urs.png"      className="about-hero-icon hero-float--L3" alt="" />
                <img src="/childrenpart/fluture.png"  className="about-hero-icon hero-float--R3" alt="" />
                <img src="/childrenpart/pui.png"      className="about-hero-icon hero-float--B1" alt="" />
                <img src="/childrenpart/pisica.png"   className="about-hero-icon hero-float--B3" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Povestea noastră */}
      <section className="about-story" data-reveal="up" data-reveal-once="true">
        <div className="floating-elements">
          <img src="/childrenpart/soare test .png" alt="Soare" className="floating-element" style={{width: '50px', height: '50px', top: '15%', left: '5%'}} />
          <img src="/childrenpart/nor.png" alt="Nor" className="floating-element" style={{width: '45px', height: '45px', top: '35%', right: '10%'}} />
          <img src="/childrenpart/curcubeu peste nori.png" alt="Curcubeu" className="floating-element" style={{width: '55px', height: '55px', bottom: '20%', left: '15%'}} />
          <img src="/childrenpart/buburuza .png" alt="Buburuză" className="floating-element" style={{width: '40px', height: '40px', top: '5%', right: '5%'}} />
          <img src="/childrenpart/albina.png" alt="Albină" className="floating-element" style={{width: '42px', height: '42px', bottom: '10%', right: '15%'}} />
        </div>
        <div className="container">
          <h2>Povestea noastră</h2>
          <p>
            Ringabell a apărut din dorința de a crea un loc cald, prietenos și plin de
            joc, în care fiecare copil să se simtă în siguranță și încurajat să descopere
            lumea în ritmul lui. De la primele idei până la primele grupe de copii,
            am construit pas cu pas un spațiu în care joaca, învățarea și grija merg
            mereu împreună.
          </p>
        </div>
      </section>

      {/* Un mediu sigur și primitor */}
      <section className="about-split" data-reveal="up" data-reveal-once="true">
        <div className="floating-elements">
          <img src="/childrenpart/unicorn.png" alt="Unicorn" className="floating-element" style={{width: '40px', height: '40px', top: '20%', left: '10%'}} />
          <img src="/childrenpart/inima.png" alt="Inimă" className="floating-element" style={{width: '35px', height: '35px', top: '50%', right: '15%'}} />
          <img src="/childrenpart/fluture.png" alt="Fluture" className="floating-element" style={{width: '45px', height: '45px', bottom: '30%', left: '25%'}} />
          <img src="/childrenpart/casa.png" alt="Casă" className="floating-element" style={{width: '38px', height: '38px', top: '10%', right: '5%'}} />
          <img src="/childrenpart/urs.png" alt="Urs" className="floating-element" style={{width: '42px', height: '42px', bottom: '15%', right: '25%'}} />
        </div>
        <div className="container split-grid">
          <div className="split-text">
            <h2>Un mediu sigur și primitor</h2>
            <p>
              Sălile noastre sunt gândite special pentru copii: luminoase,
              colorate cu grijă și organizate astfel încât cei mici să se poată
              mișca, explora și lucra în siguranță în fiecare zi.
            </p>
          </div>

          <div className="split-image">
            <img src="/galerie/IMG_6344.jpg" alt="Copii într-un mediu sigur" />
          </div>
        </div>
      </section>

      {/* Valorile Ringabell */}
      <section className="about-values" data-reveal="up" data-reveal-once="true">
        <div className="floating-elements">
          <img src="/childrenpart/baiat.png" alt="Baiat" className="floating-element" style={{width: '50px', height: '50px', top: '15%', left: '5%'}} />
          <img src="/childrenpart/fata.png" alt="Fată" className="floating-element" style={{width: '45px', height: '45px', top: '40%', right: '10%'}} />
          <img src="/childrenpart/iepuras.png" alt="Iepuraș" className="floating-element" style={{width: '40px', height: '40px', bottom: '20%', left: '15%'}} />
          <img src="/childrenpart/pisica.png" alt="Pisica" className="floating-element" style={{width: '48px', height: '48px', top: '5%', right: '20%'}} />
          <img src="/childrenpart/caine.png" alt="Câine" className="floating-element" style={{width: '46px', height: '46px', bottom: '10%', right: '5%'}} />
        </div>
        <div className="container about-values-grid">
          <div className="values-icons">
            <div className="value-item">🧸 Joacă și bucurie</div>
            <div className="value-item">🌱 Dezvoltare armonioasă</div>
            <div className="value-item">🤝 Încredere și colaborare</div>
          </div>

          <div className="values-text">
            <h2>Valorile Ringabell</h2>
            <p>
              Credem că cei mici învață cel mai bine atunci când se simt iubiți,
              înțeleși și ascultați. La Ringabell punem accent pe echilibru: joacă,
              explorare, rutine clare și o comunicare deschisă cu părinții.
            </p>
          </div>
        </div>
      </section>

      {/* Învățare prin joacă */}
      <section className="about-split reverse" data-reveal="up" data-reveal-once="true">
        <div className="floating-elements">
          <img src="/childrenpart/masina.png" alt="Mașină" className="floating-element" style={{width: '50px', height: '50px', top: '10%', left: '8%'}} />
          <img src="/childrenpart/copacel.png" alt="Copac" className="floating-element" style={{width: '45px', height: '45px', top: '35%', right: '12%'}} />
          <img src="/childrenpart/balon cu aer cald.png" alt="Balon" className="floating-element" style={{width: '40px', height: '40px', bottom: '25%', left: '20%'}} />
          <img src="/childrenpart/pui.png" alt="Pui" className="floating-element" style={{width: '38px', height: '38px', top: '5%', right: '5%'}} />
          <img src="/childrenpart/minge.png" alt="Minge" className="floating-element" style={{width: '42px', height: '42px', bottom: '10%', right: '20%'}} />
        </div>
        <div className="container split-grid">
          <div className="split-image">
            <img src="/galerie/IMG_6287.jpg" alt="Copii care se joacă" />
          </div>

          <div className="split-text">
            <h2>Învățare prin joacă</h2>
            <p>
              La Ringabell, joaca este punctul de plecare pentru orice activitate.
              Prin jocuri, povești, experimente simple și activități creative,
              îi ajutăm pe copii să-și dezvolte curiozitatea, limbajul și
              abilitățile sociale.
            </p>
          </div>
        </div>
      </section>

      {/* Ringabell în cifre */}
      <section className="about-numbers" data-reveal="up" data-reveal-once="true">
        <div className="container numbers-grid">
          <div className="number-item">
            <strong>8+</strong>
            <span>Ani de experiență</span>
          </div>
          <div className="number-item">
            <strong>120+</strong>
            <span>Copii care ne-au trecut pragul</span>
          </div>
          <div className="number-item">
            <strong>15</strong>
            <span>Programe și activități</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" data-reveal="up" data-reveal-once="true" style={{background: 'rgba(191, 225, 255, 0.2)', position: 'relative', overflow: 'hidden'}}>
        <div className="floating-elements">
          <img src="/childrenpart/unicorn.png" alt="Unicorn" className="floating-element" style={{width: '50px', height: '50px', top: '15%', left: '8%'}} />
          <img src="/childrenpart/inima.png" alt="Inimă" className="floating-element" style={{width: '45px', height: '45px', top: '35%', right: '12%'}} />
          <img src="/childrenpart/fluture.png" alt="Fluture" className="floating-element" style={{width: '55px', height: '55px', bottom: '25%', left: '20%'}} />
          <img src="/childrenpart/iepuras.png" alt="Iepuraș" className="floating-element" style={{width: '50px', height: '50px', bottom: '15%', right: '8%'}} />
        </div>
        <div className="container text-center">
          <h2 className="section-title">Vrei să faci parte din familia Ringabell?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--gray-600)'}}>
            Așteptăm cu nerăbdare să te cunoaștem și să oferim copilului tău cea mai bună experiență!
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Contactează-ne
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;