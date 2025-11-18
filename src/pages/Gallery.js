import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/galerie/cheerful-teacher-and-interracial-kids-looking-at-c-2024-11-08-18-59-50-utc-min.jpg",
      alt: "Copiii și învățătoarea fericită",
      category: "Activități educative"
    },
    {
      src: "/galerie/nursery-children-having-fun-and-playing-with-teach-2025-03-14-21-42-40-utc-min.jpg",
      alt: "Copiii se joacă cu învățătoarea",
      category: "Joc și interacțiune"
    },
    {
      src: "/galerie/portrait-of-preschool-children-and-the-teacher-2024-11-28-03-52-26-utc-min.jpg",
      alt: "Portret de grup în grădiniță",
      category: "Echipă și comunitate"
    },
    {
      src: "/galerie/portrait-of-a-teacher-and-kids-in-a-classroom-wher-2025-01-11-01-29-20-utc-min.jpg",
      alt: "Copiii în sala de clasă",
      category: "Mediu de învățare"
    },
    {
      src: "/galerie/learning-conception-new-words-children-in-kinder-2025-08-10-10-08-27-utc-min.JPG",
      alt: "Copiii învață cuvinte noi",
      category: "Proces educativ"
    },
    {
      src: "/galerie/mother-sitting-with-two-children-having-discussio-2025-04-04-17-34-34-utc-min.jpg",
      alt: "Părinți și copii în discuție",
      category: "Comunicare cu părinții"
    },
    {
      src: "/galerie/chemical-experiment-on-kids-birthday-party-2024-09-16-16-13-21-utc-min.jpg",
      alt: "Experimente științifice la petrecerea de ziua copilului",
      category: "Evenimente speciale"
    },
    {
      src: "/galerie/people-2024-10-18-05-12-36-utc-min.jpg",
      alt: "Echipa Ringabell cu copiii",
      category: "Echipa și atmosferă"
    }
  ];

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section
        className="hero parallax-section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="floating-elements">
          <img src="/childrenpart/capsuna.png" alt="Căpșună" className="floating-element" style={{width: '80px', height: '80px'}} />
          <img src="/childrenpart/lubenita.png" alt="Lubeniță" className="floating-element" style={{width: '75px', height: '75px'}} />
          <img src="/childrenpart/floare albastra.png" alt="Floare albastră" className="floating-element" style={{width: '65px', height: '65px'}} />
          <img src="/childrenpart/fluture.png" alt="Fluture" className="floating-element" style={{width: '60px', height: '60px'}} />
          <img src="/childrenpart/floare roz.png" alt="Floare roz" className="floating-element" style={{width: '70px', height: '70px'}} />
          <img src="/childrenpart/buburuza .png" alt="Buburuză" className="floating-element" style={{width: '50px', height: '50px'}} />
          <img src="/childrenpart/albina.png" alt="Albina" className="floating-element" style={{width: '45px', height: '45px'}} />
          <img src="/childrenpart/balena.png" alt="Balenă" className="floating-element" style={{width: '90px', height: '90px'}} />
          <img src="/childrenpart/peste.png" alt="Pește" className="floating-element" style={{width: '55px', height: '55px'}} />
        </div>
        <div className="hero-content bounce-in">
          <h1 className="hero-title">Galeria noastră</h1>
          <p className="hero-subtitle">
            Momentele frumoase și zâmbetele copiilor în activitățile lor favorite
          </p>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Momente de neuitat</h2>
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              În galeria Ringabell poți vedea cât de fericiți și implicați sunt copiii în 
              activitățile noastre. Fiecare imagine spune o poveste despre bucuria învățării, 
              prieteniile care se formează și momentele magice ale copilăriei.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section
        className="section wave-decoration"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Activități zilnice</h2>
          <div className="grid grid-3-enhanced mobile-two-column" style={{gap: '1.5rem'}}>
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="card card-interactive"
                style={{padding: '0', overflow: 'hidden'}}
                data-reveal="up"
                data-reveal-once="true"
              >
                <div style={{
                  position: 'relative',
                  paddingTop: '75%',
                  background: 'var(--accent-yellow-light)',
                  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                  borderBottom: '3px solid var(--primary-blue)'
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                      transition: 'transform 0.3s ease'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'var(--primary-blue)',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
                  }}>
                    <span>📸</span>
                    <span>Imagine demonstrativă</span>
                  </div>
                </div>
                <div style={{padding: '1.5rem'}}>
                  <h3 className="card-title" style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                    {image.alt}
                  </h3>
                  <p style={{color: 'var(--primary-blue)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '1rem'}}>
                    {image.category}
                  </p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${85 + (index * 3)}%`}}></div>
                    </div>
                    <small style={{color: 'var(--gray-600)', fontWeight: '600'}}>Popularitate: {85 + (index * 3)}%</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Momente distractive</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div
              className="card card-interactive fun-border slide-in-left"
              data-reveal="left"
              data-reveal-once="true"
            >
              <div className="card-icon">🎨</div>
              <h3 className="card-title">Pictură și artă</h3>
              <p className="card-text">
                Copiii își exprimă creativitatea prin activități artistice, de la pictură
                cu degetele până la creații în lut și hârtie colorată.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/dinozaur.png" alt="Artă" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive fun-border slide-in-left"
              style={{animationDelay: '0.2s'}}
              data-reveal="up"
              data-reveal-once="true"
            >
              <div className="card-icon">🔬</div>
              <h3 className="card-title">Știință distractivă</h3>
              <p className="card-text">
                Experimente simple și captivante care îi fac pe copii să înțeleagă lumea
                din jurul lor prin joacă și curiozitate.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/racheta .png" alt="Știință" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
            <div
              className="card card-interactive fun-border slide-in-left"
              style={{animationDelay: '0.4s'}}
              data-reveal="right"
              data-reveal-once="true"
            >
              <div className="card-icon">🎵</div>
              <h3 className="card-title">Muzică și dans</h3>
              <p className="card-text">
                Învățăm copiii să iubească muzica prin cântece, dans și mișcare,
                dezvoltând coordonarea și ritmul.
              </p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <img src="/childrenpart/balon cu aer cald.png" alt="Muzică" style={{width: '35px', height: '35px', opacity: 0.6}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Ce spun părinții despre galerie</h2>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              Galeria noastră nu ar fi completă fără feedback-ul părinților, care ne arată 
              impactul pozitiv pe care îl avem asupra copiilor.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <h4 className="card-title">Andreea Miron</h4>
              <p className="card-text">
                "Când văd imaginile din galerie, mă înduioșez de fiecare dată. Copilul meu e 
                atât de fericit la Ringabell și se vede din poze cât de mult îi place să fie acolo."
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Mihai Georgescu</h4>
              <p className="card-text">
                "E uimitor să vezi progresul copilului prin aceste fotografii. Din poze se vede 
                că învață multe lucruri noi și se dezvoltă frumos."
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Laura Popescu</h4>
              <p className="card-text">
                "Galeria ne ajută să ținem pasul cu tot ce se întâmplă la centru. E minunat 
                că puteți documenta atât de frumos momentele importante."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Galeria în cifre</h2>
          <div className="grid grid-3-enhanced mobile-two-column">
            <div
              className="card text-center card-interactive bounce-in"
              data-reveal="left"
              data-reveal-once="true"
            >
              <div className="card-icon">📸</div>
              <h3 className="card-title">1000+</h3>
              <p className="card-text">Fotografii în galeria noastră</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '95%'}}></div>
                </div>
                <small style={{color: 'var(--primary-blue)', fontWeight: '600'}}>Actualizare zilnică</small>
              </div>
            </div>
            <div
              className="card text-center card-interactive bounce-in"
              style={{animationDelay: '0.2s'}}
              data-reveal="up"
              data-reveal-once="true"
            >
              <div className="card-icon">🎉</div>
              <h3 className="card-title">50+</h3>
              <p className="card-text">Evenimente documentate anual</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '88%'}}></div>
                </div>
                <small style={{color: 'var(--secondary-pink)', fontWeight: '600'}}>Creștere anuală 20%</small>
              </div>
            </div>
            <div
              className="card text-center card-interactive bounce-in"
              style={{animationDelay: '0.4s'}}
              data-reveal="right"
              data-reveal-once="true"
            >
              <div className="card-icon">📅</div>
              <h3 className="card-title">365</h3>
              <p className="card-text">Zile de amintiri frumoase</p>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <small style={{color: 'var(--success-green)', fontWeight: '600'}}>Fiecare zi contează</small>
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
          <h2 className="section-title">Vrei să faci parte din galeria noastră?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--gray-600)'}}>
            Adaugă-te și tu în galeria Ringabell și creează amintiri frumoase împreună cu noi!
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Înscrie-te acum
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;