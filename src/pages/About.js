import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero" data-reveal="up" data-reveal-once="true">
        <div className="floating-elements">
          <img src="/childrenpart/casa.png" alt="Casă" className="floating-element" style={{width: '85px', height: '85px'}} />
          <img src="/childrenpart/inima.png" alt="Inimă" className="floating-element" style={{width: '70px', height: '70px'}} />
          <img src="/childrenpart/iepuras.png" alt="Iepure" className="floating-element" style={{width: '75px', height: '75px'}} />
          <img src="/childrenpart/urs.png" alt="Urs" className="floating-element" style={{width: '65px', height: '65px'}} />
          <img src="/childrenpart/pui.png" alt="Pui" className="floating-element" style={{width: '60px', height: '60px'}} />
          <img src="/childrenpart/albina.png" alt="Albina" className="floating-element" style={{width: '50px', height: '50px'}} />
          <img src="/childrenpart/fluture.png" alt="Fluture" className="floating-element" style={{width: '55px', height: '55px'}} />
          <img src="/childrenpart/pisica.png" alt="Pisică" className="floating-element" style={{width: '70px', height: '70px'}} />
          <img src="/childrenpart/caine.png" alt="Câine" className="floating-element" style={{width: '80px', height: '80px'}} />
        </div>
        <div className="hero-content bounce-in">
          <h1 className="hero-title">Despre Ringabell</h1>
          <p className="hero-subtitle">
            Povestea noastră, misiunea noastră, dragostea noastră pentru copii
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" data-reveal="up" data-reveal-once="true">
        <div className="container">
          <h2 className="section-title">Povestea noastră</h2>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-600)'}}>
              Ringabell a luat naștere din dorința de a oferi copiilor un spațiu magic unde să învețe, 
              să se joace și să se dezvolte în armonie cu naturile lor creative. Fondat în 2020, 
              centrul nostru a crescut dintr-o viziune simplă într-o realitate plină de bucurie și 
              culoare pentru sute de copii și familii.
            </p>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-600)', marginTop: '1.5rem'}}>
              Numele nostru, Ringabell, evocă ideea unui cerc magic plin de posibilități infinite - 
              exact cum vedem noi copilăria: un timp în care totul este posibil și magic. 
              Credem că fiecare copil poartă în el o poveste unică care merită să fie sprijinită, 
              cultivată și celebrată.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section wave-decoration" style={{background: 'var(--gray-100)'}} data-reveal="up" data-reveal-once="true">
        <div className="container">
          <h2 className="section-title">Misiunea noastră</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div className="card card-interactive fun-border bounce-in" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">🛡️</div>
              <h3 className="card-title">Siguranța</h3>
              <p className="card-text">
                Prioritatea numărul unu este siguranța copiilor. Menținem standarde înalte
                de siguranță în toate spațiile și activitățile noastre.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/copac 2.png" alt="Siguranță" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div className="card card-interactive fun-border bounce-in" style={{animationDelay: '0.2s'}} data-reveal="up" data-reveal-once="true">
              <div className="card-icon">📈</div>
              <h3 className="card-title">Dezvoltarea</h3>
              <p className="card-text">
                Susținem dezvoltarea armonioasă a copiilor prin activități educative,
                artistice și recreative adaptate vârstei lor.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/elicitopter.png" alt="Dezvoltare" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div className="card card-interactive fun-border bounce-in" style={{animationDelay: '0.4s'}} data-reveal="right" data-reveal-once="true">
              <div className="card-icon">🎨</div>
              <h3 className="card-title">Creativitatea</h3>
              <p className="card-text">
                Încurajăm expresia creativă și gândirea originală prin jocuri, artă,
                muzică și activități hands-on.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/fluture.png" alt="Creativitate" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" data-reveal="up" data-reveal-once="true">
        <div className="container">
          <h2 className="section-title">Valorile noastre</h2>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              La Ringabell, valorile noastre nu sunt doar cuvinte pe hârtie - sunt principiile
              care ne ghidează în fiecare zi:
            </p>
          </div>
          
          <div className="grid grid-3-enhanced mobile-two-column">
            <div className="card card-interactive slide-in-left" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">💖</div>
              <h3 className="card-title">Respectul</h3>
              <p className="card-text">
                Respectăm fiecare copil ca ființă unică, cu nevoi și talente proprii.
              </p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <small style={{color: 'var(--secondary-pink)', fontWeight: '600'}}>100% respect pentru fiecare copil</small>
              </div>
            </div>
            <div className="card card-interactive slide-in-left" style={{animationDelay: '0.2s'}} data-reveal="up" data-reveal-once="true">
              <div className="card-icon">🌈</div>
              <h3 className="card-title">Inclusivitatea</h3>
              <p className="card-text">
                Creăm un mediu prietenos pentru toți copiii, indiferent de background-ul lor.
              </p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <small style={{color: 'var(--accent-yellow-dark)', fontWeight: '600'}}>Mediu incluziv pentru toți</small>
              </div>
            </div>
            <div className="card card-interactive slide-in-left" style={{animationDelay: '0.4s'}} data-reveal="right" data-reveal-once="true">
              <div className="card-icon">😊</div>
              <h3 className="card-title">Bucuria și Excelența</h3>
              <p className="card-text">
                Credem că învățarea trebuie să fie plină de bucurie și ne străduim
                să oferim cele mai bune servicii și experiențe.
              </p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '98%'}}></div>
                </div>
                <small style={{color: 'var(--success-green)', fontWeight: '600'}}>98% satisfacția copiilor</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{background: 'var(--gray-100)'}} data-reveal="up" data-reveal-once="true">
        <div className="container">
          <h2 className="section-title">Echipa noastră</h2>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-600)'}}>
              Echipa Ringabell este formată din profesionali pasionați, educatori cu experiență 
              și persoane care își dedică viețile pentru binele copiilor. Fiecare membru al 
              echipei noastre este selecționat cu grijă pentru dragostea sa față de copii și 
              dedicarea pentru excelență în educația timpurie.
            </p>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-600)', marginTop: '1.5rem'}}>
              Toți educatoarele și supervizorii noștri au calificările necesare și participă 
              regulat la cursuri de formare continuă pentru a rămâne la curent cu cele mai bune 
              practici în domeniul educației copiilor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" data-reveal="up" data-reveal-once="true">
        <div className="container">
          <h2 className="section-title">Ringabell în cifre</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div className="card text-center card-interactive bounce-in" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">👨‍👩‍👧‍👦</div>
              <h3 className="card-title">500+</h3>
              <p className="card-text">Copii fericiți care au trecut prin centrul nostru</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
                <small style={{color: 'var(--primary-blue)', fontWeight: '600'}}>Creștere constantă</small>
              </div>
            </div>
            <div className="card text-center card-interactive bounce-in" style={{animationDelay: '0.2s'}} data-reveal="up" data-reveal-once="true">
              <div className="card-icon">📅</div>
              <h3 className="card-title">4 ani</h3>
              <p className="card-text">De experiență în domeniul educației copiilor</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '80%'}}></div>
                </div>
                <small style={{color: 'var(--success-green)', fontWeight: '600'}}>Experiență dovedită</small>
              </div>
            </div>
            <div className="card text-center card-interactive bounce-in" style={{animationDelay: '0.4s'}} data-reveal="right" data-reveal-once="true">
              <div className="card-icon">⭐</div>
              <h3 className="card-title">98%</h3>
              <p className="card-text">Rata de satisfacție a părinților</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '98%'}}></div>
                </div>
                <small style={{color: 'var(--secondary-pink)', fontWeight: '600'}}>Excelență recunoscută</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" data-reveal="up" data-reveal-once="true">
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