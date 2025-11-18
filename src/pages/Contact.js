import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section
        className="hero"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="floating-elements">
          <img 
            src="/childrenpart/inima.png" 
            alt="Inimă" 
            className="floating-element" 
            style={{width: '35px', height: '35px'}}
          />
          <img 
            src="/childrenpart/fluture.png" 
            alt="Fluture" 
            className="floating-element" 
            style={{width: '30px', height: '30px'}}
          />
          <img 
            src="/childrenpart/soare test .png" 
            alt="Soare" 
            className="floating-element" 
            style={{width: '40px', height: '40px'}}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Contactează-ne</h1>
          <p className="hero-subtitle">
            Suntem aici pentru tine! Vino să ne vizitezi sau scrie-ne pentru orice întrebare
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Informații de contact</h2>
          <div className="grid grid-2 mobile-two-column">
            <div className="card" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">📍</div>
              <h3 className="card-title">Adresa noastră</h3>
              <p className="card-text">
                <strong>Ringabell Kids Center</strong><br />
                Strada Busuioc 19<br />
                Arad 310295
              </p>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">📞</div>
              <h3 className="card-title">Telefon și email</h3>
              <p className="card-text">
                <strong>Telefon:</strong> 0721 234 567<br />
                <strong>WhatsApp:</strong> 0732 123 456<br />
                <strong>Email:</strong> contact@ringabell.ro<br />
                <strong>Programări:</strong> programari@ringabell.ro
              </p>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">🕐</div>
              <h3 className="card-title">Program de lucru</h3>
              <p className="card-text">
                <strong>Luni - Vineri:</strong> 7:00 - 18:00<br />
                <strong>Sâmbătă:</strong> 9:00 - 15:00<br />
                <strong>Duminică:</strong> Închis<br />
                <strong>Sărbători:</strong> Program special
              </p>
            </div>
            <div className="card" data-reveal="right" data-reveal-once="true">
              <div className="card-icon">📱</div>
              <h3 className="card-title">Social media</h3>
              <p className="card-text">
                <strong>Facebook:</strong> @RingabellKids<br />
                <strong>Instagram:</strong> @ringabell_ro<br />
                <strong>YouTube:</strong> Ringabell Romania<br />
                <strong>TikTok:</strong> @ringabell_kids
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="section"
        style={{background: 'var(--gray-100)'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Trimite-ne un mesaj</h2>
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto'}}>
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              Ai întrebări sau vrei să programezi o întâlnire? Completează formularul de mai jos 
              și îți vom răspunde în cel mai scurt timp posibil!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="grid grid-2">
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                    Numele tău *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-2" style={{marginTop: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                    Vârsta copilului
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <option value="">Selectează vârsta</option>
                    <option value="2-3">2-3 ani</option>
                    <option value="3-4">3-4 ani</option>
                    <option value="4-5">4-5 ani</option>
                    <option value="5-6">5-6 ani</option>
                    <option value="6-7">6-7 ani</option>
                    <option value="7-8">7-8 ani</option>
                    <option value="8-9">8-9 ani</option>
                    <option value="9-10">9-10 ani</option>
                    <option value="10-11">10-11 ani</option>
                    <option value="11-12">11-12 ani</option>
                    <option value="12+">Peste 12 ani</option>
                  </select>
                </div>
              </div>

              <div style={{marginTop: '1.5rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                  Serviciul de interes
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--gray-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
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
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--gray-700)'}}>
                  Mesajul tău *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Spune-ne cum te putem ajuta..."
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--gray-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'all var(--transition-fast)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <input type="checkbox" required />
                <span style={{fontSize: '0.9rem', color: 'var(--gray-600)'}}>
                  Îmi dau acordul pentru prelucrarea datelor personale conform{' '}
                  <a href="#" style={{color: 'var(--primary-blue)'}}>politicii de confidențialitate</a>
                </span>
              </div>

              <div style={{marginTop: '2rem', textAlign: 'center'}}>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    background: submitStatus === 'success' 
                      ? 'var(--success-green)' 
                      : undefined
                  }}
                >
                  {isSubmitting 
                    ? 'Se trimite...' 
                    : submitStatus === 'success' 
                      ? 'Mesaj trimis cu succes! ✓' 
                      : 'Trimite mesajul'
                  }
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Actions */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <h2 className="section-title">Contact rapid</h2>
          <div className="grid grid-2 mobile-two-column">
            <div className="card" data-reveal="left" data-reveal-once="true">
              <div className="card-icon">📞</div>
              <h3 className="card-title">Programare telefonică</h3>
              <p className="card-text">
                Sună-ne direct pentru o programare rapidă sau pentru orice întrebare urgentă.
              </p>
              <a href="tel:0721234567" className="btn btn-secondary" style={{marginTop: '1rem', display: 'block', textAlign: 'center'}}>
                Sună acum: 0721 234 567
              </a>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">💬</div>
              <h3 className="card-title">WhatsApp</h3>
              <p className="card-text">
                Scrie-ne pe WhatsApp pentru răspunsuri rapide și programări pe loc.
              </p>
              <a href="https://wa.me/40732123456" className="btn btn-secondary" style={{marginTop: '1rem', display: 'block', textAlign: 'center'}}>
                Scrie pe WhatsApp
              </a>
            </div>
            <div className="card" data-reveal="up" data-reveal-once="true">
              <div className="card-icon">🏢</div>
              <h3 className="card-title">Vizita la centru</h3>
              <p className="card-text">
                Vino să ne vizitezi pentru a vedea personal facilitățile și a cunoaște echipa.
              </p>
              <a href="#map" className="btn btn-secondary" style={{marginTop: '1rem', display: 'block', textAlign: 'center'}}>
                Vezi hartă
              </a>
            </div>
            <div className="card" data-reveal="right" data-reveal-once="true">
              <div className="card-icon">🎁</div>
              <h3 className="card-title">Zi gratuită de test</h3>
              <p className="card-text">
                Beneficiază de o zi gratuită de încercare pentru a cunoaște atmosfera Ringabell.
              </p>
              <a href="#contact-form" className="btn btn-secondary" style={{marginTop: '1rem', display: 'block', textAlign: 'center'}}>
                Programează acum
              </a>
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
            <p style={{fontSize: '1.2rem', color: 'var(--gray-600)'}}>
              Ne aflăm în inima Aradului, într-o zonă liniștită și ușor accesibilă cu transportul public și mașina.
            </p>
          </div>
          
          <div style={{
            background: 'var(--primary-blue)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            border: '4px solid var(--secondary-pink)',
            boxShadow: '0 8px 24px rgba(74, 144, 226, 0.4)'
          }}>
            <div style={{
              background: 'white',
              height: '400px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gray-700)',
              fontSize: '1.2rem'
            }}>
              <div style={{textAlign: 'center'}}>
                <p style={{marginBottom: '1rem'}}>📍 Aici va fi harta interactivă</p>
                <p><strong>Strada Busuioc 19, Arad 310295</strong></p>
                <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.7'}}>
                  Zona: Centrul Aradului | Transport: Autobuz, tramvai, parcare gratuită
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section
        className="section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container text-center">
          <h2 className="section-title">Contact de urgență</h2>
          <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
            <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
              <strong>În caz de urgență în afara programului de lucru:</strong>
            </p>
            <p>📞 Telefon de urgență: 0766 123 456</p>
            <p>📧 Email de urgență: urgent@ringabell.ro</p>
            <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.8'}}>
              Disponibil 24/7 pentru situații urgente care privesc copiii înscriși la noi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;