import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const galleryImages = [
    { src: "/galerie/IMG_6268.jpg", thumbSrc: "/galerie/IMG_6268.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6272.jpg", thumbSrc: "/galerie/IMG_6272.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6277.jpg", thumbSrc: "/galerie/IMG_6277.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6282.jpg", thumbSrc: "/galerie/IMG_6282.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6283.jpg", thumbSrc: "/galerie/IMG_6283.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6284.jpg", thumbSrc: "/galerie/IMG_6284.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6287.jpg", thumbSrc: "/galerie/IMG_6287.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6289.jpg", thumbSrc: "/galerie/IMG_6289.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6291.jpg", thumbSrc: "/galerie/IMG_6291.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6301.jpg", thumbSrc: "/galerie/IMG_6301.jpg", alt: "Imagine din galerie", category: "Povești și joacă de rol" },
    { src: "/galerie/IMG_6304.jpg", thumbSrc: "/galerie/IMG_6304.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6307.jpg", thumbSrc: "/galerie/IMG_6307.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6308.jpg", thumbSrc: "/galerie/IMG_6308.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6314.jpg", thumbSrc: "/galerie/IMG_6314.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6316.jpg", thumbSrc: "/galerie/IMG_6316.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6318.jpg", thumbSrc: "/galerie/IMG_6318.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6321.jpg", thumbSrc: "/galerie/IMG_6321.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6326.jpg", thumbSrc: "/galerie/IMG_6326.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6335.jpg", thumbSrc: "/galerie/IMG_6335.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6336.jpg", thumbSrc: "/galerie/IMG_6336.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6337.jpg", thumbSrc: "/galerie/IMG_6337.jpg", alt: "Imagine din galerie", category: "Ateliere de creație" },
    { src: "/galerie/IMG_6344.jpg", thumbSrc: "/galerie/IMG_6344.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6347.jpg", thumbSrc: "/galerie/IMG_6347.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6348.jpg", thumbSrc: "/galerie/IMG_6348.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6362.jpg", thumbSrc: "/galerie/IMG_6362.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6364.jpg", thumbSrc: "/galerie/IMG_6364.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6382.jpg", thumbSrc: "/galerie/IMG_6382.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6384.jpg", thumbSrc: "/galerie/IMG_6384.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6387.jpg", thumbSrc: "/galerie/IMG_6387.jpg", alt: "Imagine din galerie", category: "Imagini noi" },
    { src: "/galerie/IMG_6388.jpg", thumbSrc: "/galerie/IMG_6388.jpg", alt: "Imagine din galerie", category: "Imagini noi" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, [galleryImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  }, [galleryImages.length]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, goToPrev, goToNext, closeModal]);

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section
        className="gallery-hero hero-section"
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="gallery-shell">
          <div className="gallery-hero-inner">
            <div className="gallery-hero-copy">
              <h1 className="gallery-hero-title">
                Galeria noastră
              </h1>

              <p className="gallery-hero-subtitle">
                Momentele frumoase și zâmbetele copiilor în activitățile lor favorite
              </p>

              <div className="gallery-hero-actions">
                <Link
                  to="/contact"
                  className="gallery-button gallery-button--primary"
                >
                  Programează o vizită
                </Link>
                <Link
                  to="/servicii"
                  className="gallery-button gallery-button--ghost"
                >
                  Vezi serviciile
                </Link>
              </div>
            </div>

            <div className="gallery-hero-media" aria-hidden="true">
              <div className="gallery-hero-photo-frame">
                <img
                  className="gallery-hero-photo"
                  src="/galerie/IMG_6373.jpg"
                  alt="Copiii se joacă cu puzzle-uri"
                  style={{objectPosition: '20% 50%'}}
                />
                <div className="gallery-hero-label">
                  Jocuri educative
                </div>
              </div>

              {/* Floating cute elements repositioned around hero */}
              <div className="gallery-hero-floating">
                <img
                  src="/childrenpart/capsuna.png"
                  alt="Căpșună"
                  className="gallery-hero-icon hero-float--L1 friendly-strawberry"
                />
                <img
                  src="/childrenpart/lubenita.png"
                  alt="Lubeniță"
                  className="gallery-hero-icon hero-float--R1 friendly-watermelon"
                />
                <img
                  src="/childrenpart/floare albastra.png"
                  alt="Floare albastră"
                  className="gallery-hero-icon hero-float--L2 friendly-blueflower"
                />
                <img
                  src="/childrenpart/fluture.png"
                  alt="Fluture"
                  className="gallery-hero-icon hero-float--R2 friendly-butterfly"
                />
                <img
                  src="/childrenpart/floare roz.png"
                  alt="Floare roz"
                  className="gallery-hero-icon hero-float--L3 friendly-pinkflower"
                />
                <img
                  src="/childrenpart/buburuza .png"
                  alt="Buburuză"
                  className="gallery-hero-icon hero-float--R3 friendly-ladybug"
                />
                <img
                  src="/childrenpart/albina.png"
                  alt="Albina"
                  className="gallery-hero-icon hero-float--B1 friendly-bee"
                />
                <img
                  src="/childrenpart/balena.png"
                  alt="Balenă"
                  className="gallery-hero-icon hero-float--B3 friendly-whale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section
        className="section"
        style={{background: 'var(--gray-100)', padding: '4rem 0'}}
        data-reveal="up"
        data-reveal-once="true"
      >
        <div className="container">
          <div className="gallery-images-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingTop: '100%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(galleryImages.findIndex(img => img.src === image.src));
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={image.thumbSrc}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            ))}
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
          <img src="/childrenpart/capsuna.png" alt="Căpșună" className="floating-element" style={{width: '50px', height: '50px', top: '10%', left: '5%'}} />
          <img src="/childrenpart/lubenita.png" alt="Lubeniță" className="floating-element" style={{width: '55px', height: '55px', top: '20%', right: '10%'}} />
          <img src="/childrenpart/floare albastra.png" alt="Floare albastră" className="floating-element" style={{width: '45px', height: '45px', bottom: '20%', left: '15%'}} />
          <img src="/childrenpart/buburuza .png" alt="Buburuză" className="floating-element" style={{width: '60px', height: '60px', bottom: '10%', right: '5%'}} />
        </div>
        <div className="container text-center">
          <h2 className="section-title">Transformăm joaca în amintiri, vrei să faci parte din ele?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--gray-600)'}}>
            Alătură-te și creează momente memorabile pentru copilul tău.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Programează o vizită
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={closeModal}
        >
          <button
            className="gallery-nav-btn"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
          >
            ‹
          </button>
          <div
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'hidden',
              cursor: 'default',
              width: '100%',
              height: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                display: 'flex',
                width: `${galleryImages.length * 100}%`,
                height: '100%',
                transform: `translateX(-${currentIndex * (100 / galleryImages.length)}%)`,
                transition: isMobile ? 'transform 0.3s ease' : 'none'
              }}
            >
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: `${100 / galleryImages.length}%`,
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              ))}
            </div>
          </div>
          <button
            className="gallery-nav-btn"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            ›
          </button>
          <button
            className="gallery-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;