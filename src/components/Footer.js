import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <img src="/logo.png" alt="Ringabell Logo" className="footer-logo" />
            <p className="footer-text">
              Cel mai modern centru pentru copii din Arad. Oferim servicii de calitate
              într-un mediu sigur și prietenos pentru cei mici.
            </p>
          </div>

          <div className="footer-section footer-contact-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p>📧 contact@ringabell.ro</p>
              <p>📞 0741 643 983</p>
              <p>📍 Strada Busuioc 19, Arad 310295</p>
            </div>
          </div>

          <div className="footer-mobile-left">
            <div className="footer-section footer-hours-section">
              <h4>Program</h4>
              <div className="footer-hours">
                <div className="hours-item">
                  <div className="day">Luni - Vineri</div>
                  <div className="time">7:00 - 18:00</div>
                </div>
                <div className="hours-item">
                  <div className="day">Sâmbătă</div>
                  <div className="time">9:00 - 15:00</div>
                </div>
                <div className="hours-item">
                  <div className="day">Duminică</div>
                  <div className="time">Închis</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section footer-nav-section">
            <h4>Navigare</h4>
            <ul className="footer-links">
              <li><Link to="/">Acasă</Link></li>
              <li><Link to="/despre-noi">Despre noi</Link></li>
              <li><Link to="/servicii">Servicii</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ringabell. Toate drepturile rezervate.</p>
          <p>Cu drag pentru cei mici!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;