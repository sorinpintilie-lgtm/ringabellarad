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
    <>
    <nav className="navbar">
      <div className="nav-container">
        <Link
          to="/"
          className="nav-logo"
        >
          <img src="/logo.png" alt="Ringabell Logo" />
        </Link>

        {/* Desktop inline links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? 'active' : ''
              }${item.path === '/contact' ? ' nav-link--cta' : ''}`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Deschide meniul"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Decorative floating bubbles to keep it kid-friendly */}
      <div className="nav-decorations">
        <div className="nav-bubble bubble-1"></div>
        <div className="nav-bubble bubble-2"></div>
        <div className="nav-bubble bubble-3"></div>
      </div>
    </nav>

    {/* Mobile dropdown menu */}
    <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="primary-navigation">
      <button
        className="nav-close-btn"
        onClick={closeMenu}
        aria-label="Închide meniul"
      >
        ✕
      </button>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? 'active' : ''
            }${item.path === '/contact' ? ' nav-link--cta' : ''}`}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>

    {/* Backdrop */}
    <div
      className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`}
      onClick={closeMenu}
    />
    </>
  );
};

export default Navbar;