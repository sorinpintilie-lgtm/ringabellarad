import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Acasă', path: '/' },
    { name: 'Despre noi', path: '/despre-noi' },
    { name: 'Servicii', path: '/servicii' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when the colorful mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
      <div className="nav-container">
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          Ringabell
        </Link>

        {/* Desktop menu + colorful mobile drawer content */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Deschide meniul de navigare"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>


      {/* Decorative floating bubbles to keep it kid-friendly */}
      <div className="nav-decorations">
        <div className="nav-bubble bubble-1"></div>
        <div className="nav-bubble bubble-2"></div>
        <div className="nav-bubble bubble-3"></div>
      </div>
    </nav>
  );
};

export default Navbar;