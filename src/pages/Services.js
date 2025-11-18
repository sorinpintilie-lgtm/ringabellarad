import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section
        className="hero parallax-section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="floating-elements">
          <img src="/childrenpart/inghetata.png" alt="Înghețată" className="floating-element" style={{width: '90px', height: '90px'}} />
          <img src="/childrenpart/minge.png" alt="Minge" className="floating-element" style={{width: '70px', height: '70px'}} />
          <img src="/childrenpart/racheta .png" alt="Rachetă" className="floating-element" style={{width: '80px', height: '80px'}} />
          <img src="/childrenpart/capsuna.png" alt="Căpșună" className="floating-element" style={{width: '60px', height: '60px'}} />
          <img src="/childrenpart/lubenita.png" alt="Lubeniță" className="floating-element" style={{width: '75px', height: '75px'}} />
          <img src="/childrenpart/floare albastra.png" alt="Floare albastră" className="floating-element" style={{width: '50px', height: '50px'}} />
          <img src="/childrenpart/buburuza .png" alt="Buburuză" className="floating-element" style={{width: '45px', height: '45px'}} />
          <img src="/childrenpart/umbrela.png" alt="Umbrelă" className="floating-element" style={{width: '65px', height: '65px'}} />
          <img src="/childrenpart/balena.png" alt="Balenă" className="floating-element" style={{width: '85px', height: '85px'}} />
        </div>
        <div className="hero-content bounce-in">
          <h1 className="hero-title">Serviciile noastre</h1>
          <p className="hero-subtitle">
            Activități educative, distractive și sigure pentru copiii dumneavoastră
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Ce oferim</h2>
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              La Ringabell oferim o gamă completă de servicii pentru copii, de la activități educative 
              până la programe de after school. Toate activitățile noastre sunt concepute pentru a 
              stimula dezvoltarea armonioasă a copiilor într-un mediu sigur și plin de bucurie.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section
        className="section wave-decoration"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Servicii principale</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div
              className="card card-interactive slide-in-left"
              data-reveal="left"
              data-reveal-once="true"
            >
              <div className="card-icon">👶</div>
              <h3 className="card-title">Servicii de grădiniță</h3>
              <p className="card-text">
                Program zilnic structurat pentru copiii de 3-6 ani, incluzând activități educative,
                joacă organizată, mese sănătoase și program de somn.
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Program 7:00 - 18:00</li>
                <li>Activități educative adaptate vârstei</li>
                <li>Mese și gustări sănătoase</li>
                <li>Somn de prânz supravegheat</li>
              </ul>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/copacel.png" alt="Grădiniță" style={{width: '40px', height: '40px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive slide-in-left"
              style={{animationDelay: '0.2s'}}
              data-reveal="up"
              data-reveal-once="true"
            >
              <div className="card-icon">📚</div>
              <h3 className="card-title">After school</h3>
              <p className="card-text">
                Program pentru copiii de 6-12 ani care oferă suport pentru teme, activități
                creative și recreere în siguranță după școală.
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Program 12:00 - 18:00</li>
                <li>Ajutor la teme și lecții</li>
                <li>Activități artistice și manuale</li>
                <li>Jocuri interactive și sport</li>
              </ul>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/casa.png" alt="After School" style={{width: '40px', height: '40px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive slide-in-left"
              style={{animationDelay: '0.4s'}}
              data-reveal="right"
              data-reveal-once="true"
            >
              <div className="card-icon">🎨</div>
              <h3 className="card-title">Activități educative</h3>
              <p className="card-text">
                Atelierele noastre educative stimulează creativitatea și dezvoltă abilități
                importante prin joc și experimentare.
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Atelier de pictură și desen</li>
                <li>Curs de muzică și dans</li>
                <li>Laborator de știință pentru copii</li>
                <li>Teatru și storytelling</li>
              </ul>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/dinozaur.png" alt="Activități" style={{width: '40px', height: '40px', opacity: 0.6}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Grupe de vârstă</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div
              className="card card-interactive fun-border bounce-in"
              data-reveal="left"
              data-reveal-once="true"
            >
              <div className="card-icon">🧸</div>
              <h3 className="card-title">3-4 ani - Prichindei</h3>
              <p className="card-text">
                Program adaptat celor mai mici, focus pe dezvoltarea abilităților motorii,
                sociale și de comunicare prin joacă și explorare.
              </p>
              <p style={{marginTop: '1rem', fontWeight: '600', color: 'var(--primary-blue)'}}>
                Activități: Jocuri senzoriale, povești interactive, activități artistice simple, cântece și dans.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/pisica.png" alt="Prichindei" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive fun-border bounce-in"
              style={{animationDelay: '0.2s'}}
              data-reveal="up"
              data-reveal-once="true"
            >
              <div className="card-icon">🎯</div>
              <h3 className="card-title">5-6 ani - Școlari mici</h3>
              <p className="card-text">
                Pregătire pentru școală prin activități structurate care dezvoltă abilitățile
                de concentrare și învățare.
              </p>
              <p style={{marginTop: '1rem', fontWeight: '600', color: 'var(--primary-blue)'}}>
                Activități: Activități de prealfabetizare, matematică prin joc, experimente științifice simple.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/baiat.png" alt="Școlari mici" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive fun-border bounce-in"
              style={{animationDelay: '0.4s'}}
              data-reveal="right"
              data-reveal-once="true"
            >
              <div className="card-icon">⚽</div>
              <h3 className="card-title">7-12 ani - Școlari mari</h3>
              <p className="card-text">
                Combinăm învățarea cu distracția, oferind suport pentru școală și activități
                creative pentru dezvoltarea talentelor și pregătirea pentru provocările adolescentului.
              </p>
              <p style={{marginTop: '1rem', fontWeight: '600', color: 'var(--primary-blue)'}}>
                Activități: Cluburi tematice, atelier de coding, activități de leadership, proiecte de cercetare.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/fata.png" alt="Școlari mari" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="section"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Pachete și prețuri</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div
              className="card card-interactive slide-in-right"
              data-reveal="left"
              data-reveal-once="true"
            >
              <div className="card-icon">👶</div>
              <h3 className="card-title">Program complet - Grădiniță</h3>
              <p className="card-text">
                <strong>Copii 3-6 ani</strong>
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Program întreg: <strong>800 lei/lună</strong></li>
                <li>Program redus (4 zile): <strong>650 lei/lună</strong></li>
                <li>Inclus: mese, gustări, activități</li>
              </ul>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <small style={{color: 'var(--success-green)', fontWeight: '600'}}>Cel mai popular</small>
              </div>
            </div>
            <div
              className="card card-interactive slide-in-right"
              style={{animationDelay: '0.2s'}}
              data-reveal="up"
              data-reveal-once="true"
            >
              <div className="card-icon">📚</div>
              <h3 className="card-title">After school</h3>
              <p className="card-text">
                <strong>Copii 6-12 ani</strong>
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Program întreg: <strong>600 lei/lună</strong></li>
                <li>Program 3 zile: <strong>450 lei/lună</strong></li>
                <li>Inclus: ajutor teme, gustări</li>
              </ul>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
                <small style={{color: 'var(--primary-blue)', fontWeight: '600'}}>Suport pentru școală</small>
              </div>
            </div>
            <div
              className="card card-interactive slide-in-right"
              style={{animationDelay: '0.4s'}}
              data-reveal="right"
              data-reveal-once="true"
            >
              <div className="card-icon">🎨</div>
              <h3 className="card-title">Atelierele</h3>
              <p className="card-text">
                <strong>Activități suplimentare</strong>
              </p>
              <ul style={{marginTop: '1rem', color: 'var(--gray-600)', lineHeight: '1.6'}}>
                <li>Atelier artă: <strong>80 lei/lună</strong></li>
                <li>Curs muzică: <strong>90 lei/lună</strong></li>
                <li>Știință distractivă: <strong>85 lei/lună</strong></li>
              </ul>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '95%'}}></div>
                </div>
                <small style={{color: 'var(--secondary-pink)', fontWeight: '600'}}>Flexibil și accesibil</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container text-center">
          <h2 className="section-title">Vrei să încerci serviciile noastre?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--gray-600)'}}>
            Oferim posibilitatea unei zile gratuite de încercare pentru ca tu și copilul 
            să ne cunoașteți mai bine!
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