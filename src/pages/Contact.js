import React from 'react';
import '../styles/contact.css';

const Contact = () => {

  return (
    <div className="contact">
      {/* Page Title */}
      <section
        className="section hero-section"
        style={{paddingTop: '7rem', paddingBottom: '2rem', background: 'linear-gradient(135deg, #ffecd2 0%, #e0f7fa 100%)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container text-center">
          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.5rem 2rem', boxShadow: 'var(--shadow-lg)', display: 'inline-block' }}>
            <h1 style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary-blue)', marginBottom: '1rem'}}>Contactează-ne</h1>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              Suntem aici pentru tine! Vino să ne vizitezi sau scrie-ne pentru orice întrebare
            </p>
            <p style={{fontSize: '0.95rem', color: 'var(--gray-500)'}}>
              De obicei răspundem în aceeași zi lucrătoare.
            </p>
          </div>
        </div>
      </section>

      {/* Dummy Grid */}
      <section
        className="section"
        style={{paddingTop: '1rem'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <div style={{background: 'var(--gray-100)', padding: '2rem', borderRadius: 'var(--radius-xl)'}}>
              <h3 style={{textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-blue)', fontSize: '1.5rem'}}>Trimite-ne un mesaj</h3>
              <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--gray-600)', fontSize: '1rem'}}>
                Ai întrebări sau vrei să programezi o întâlnire? Completează formularul de mai jos
                și îți vom răspunde în cel mai scurt timp posibil!
              </p>

              <form>
                <div className="card" data-reveal="up" data-reveal-once="true" style={{boxShadow: 'none', border: 'none', background: 'transparent'}}>
                  <div className="grid grid-2">
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                        Nume părinte *
                      </label>
                      <input
                        type="text"
                        name="name"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '2px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9rem',
                          transition: 'all var(--transition-fast)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '2px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9rem',
                          transition: 'all var(--transition-fast)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-2" style={{marginTop: '1.5rem'}}>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '2px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9rem',
                          transition: 'all var(--transition-fast)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                        Vârsta copilului
                      </label>
                      <select
                        name="childAge"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '2px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9rem',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <option value="">Selectează vârsta</option>
                        <option value="3-4">3-4 ani</option>
                        <option value="4-5">4-5 ani</option>
                        <option value="5-6">5-6 ani</option>
                        <option value="6-7">6-7 ani</option>
                        <option value="7-8">7-8 ani</option>
                      </select>
                    </div>
                  </div>

                  <div style={{marginTop: '1.5rem'}}>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                      Serviciul de interes
                    </label>
                    <select
                      name="service"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <option value="">Selectează serviciul</option>
                      <option value="gradinita">Program de grădiniță</option>
                      <option value="after-school">After school</option>
                      <option value="atelier">Ateliere educative</option>
                      <option value="evenimente">Evenimente speciale</option>
                      <option value="consultatie">Consultație gratuită</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div style={{marginTop: '1.5rem'}}>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)', fontSize: '0.9rem'}}>
                      Mesajul tău *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Spune-ne cum te putem ajuta..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        transition: 'all var(--transition-fast)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input type="checkbox" />
                    <span style={{fontSize: '0.8rem', color: 'var(--gray-600)'}}>
                      Îmi dau acordul pentru prelucrarea datelor personale conform{' '}
                      <a
                        href="/politica-confidentialitate"
                        style={{color: 'var(--primary-blue)', textDecoration: 'underline'}}
                      >
                        politicii de confidențialitate
                      </a>
                    </span>
                  </div>

                  <div style={{marginTop: '2rem', textAlign: 'center'}}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        fontSize: '1rem'
                      }}
                    >
                      Trimite mesajul
                    </button>
                  </div>
                </div>
              </form>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <p style={{margin: 0, fontSize: '0.95rem', color: 'var(--gray-700)'}}>
                  <strong>Pentru părinți:</strong> poți să ne scrii orice întrebare – de la adaptare și program, până la meniul zilnic.
                </p>
                <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--gray-500)'}} className="mobile-two-lines">
                  <span>Preferi telefonul?</span> <span>Sună-ne la <a href="tel:0741643983" style={{color: 'var(--primary-blue)', fontWeight: 'bold'}}>0741 643 983</a>.</span>
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Additional Info */}
      <section
        className="section"
        style={{paddingTop: '0rem'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <div className="additional-info-grid">
            <div className="card" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">📞</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Informații de contact</h3>
              <ul style={{marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-600)'}}>
                <li>Telefon & WhatsApp: <a href="tel:0741643983" style={{color: 'var(--primary-blue)'}}>0741 643 983</a></li>
                <li>Email: <a href="mailto:gradinita@ringabell.ro" style={{color: 'var(--primary-blue)'}}>gradinita@ringabell.ro</a></li>
                <li>Facebook: <a href="https://www.facebook.com/gradinita.ringabell/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-blue)'}}>Gradinița Ringabell</a></li>
              </ul>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">🕐</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Program de lucru</h3>
              <ul style={{marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-600)'}}>
                <li>Luni - Vineri: 7:00 - 18:00</li>
                <li>Sâmbătă: 9:00 - 15:00</li>
                <li>Duminică: Închis</li>
                <li>Sărbători: Program special</li>
              </ul>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">📍</div>
              <h3 className="card-title" style={{fontSize: '1.1rem'}}>Vizita la centru</h3>
              <p className="card-text" style={{fontSize: '0.9rem'}}>
                Vino să ne vizitezi pentru a vedea personal facilitățile și a cunoaște echipa.
              </p>
              <p style={{fontSize: '0.85rem', color: 'var(--gray-500)', marginTop: '0.75rem'}}>
                Te rugăm să ne anunți înainte pentru a pregăti o vizită în liniște pentru copilul tău.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section
        className="section"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Locația noastră</h2>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <p style={{fontSize: '1.05rem', color: 'var(--gray-600)', maxWidth: '720px', margin: '0 auto'}}>
              Suntem pe strada Busuioc 19, într-o zonă liniștită a Aradului.
              Poți ajunge ușor cu mașina sau transportul public – folosește harta de mai jos pentru traseu.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.0662343632903!2d21.34793658676963!3d46.175320496563764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745999901580283%3A0xf2c0291c5dec6f85!2sRingabell%20S.R.L.!5e1!3m2!1sen!2sro!4v1763716042631!5m2!1sen!2sro"
            width="600"
            height="450"
            style={{border: 0, borderRadius: 'var(--radius-lg)', width: '100%', height: '450px', marginTop: '2rem'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația Ringabell Kids Center pe hartă"
          />
        </div>
      </section>



    </div>
  );
};

export default Contact;