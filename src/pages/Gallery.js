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
    { src: "/galerie/IMG_6268.jpg", thumbSrc: "/galerie/IMG_6268.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6272.jpg", thumbSrc: "/galerie/IMG_6272.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6277.jpg", thumbSrc: "/galerie/IMG_6277.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6282.jpg", thumbSrc: "/galerie/IMG_6282.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6283.jpg", thumbSrc: "/galerie/IMG_6283.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6284.jpg", thumbSrc: "/galerie/IMG_6284.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6287.jpg", thumbSrc: "/galerie/IMG_6287.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6289.jpg", thumbSrc: "/galerie/IMG_6289.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6291.jpg", thumbSrc: "/galerie/IMG_6291.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6304.jpg", thumbSrc: "/galerie/IMG_6304.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6307.jpg", thumbSrc: "/galerie/IMG_6307.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6308.jpg", thumbSrc: "/galerie/IMG_6308.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6310.jpg", thumbSrc: "/galerie/IMG_6310.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6311.jpg", thumbSrc: "/galerie/IMG_6311.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6314.jpg", thumbSrc: "/galerie/IMG_6314.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6316.jpg", thumbSrc: "/galerie/IMG_6316.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6318.jpg", thumbSrc: "/galerie/IMG_6318.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6321.jpg", thumbSrc: "/galerie/IMG_6321.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6335.jpg", thumbSrc: "/galerie/IMG_6335.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6336.jpg", thumbSrc: "/galerie/IMG_6336.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6337.jpg", thumbSrc: "/galerie/IMG_6337.jpg", alt: "Imagine din galerie", category: "Ateliere de creație", type: 'image' },
    { src: "/galerie/IMG_6344.jpg", thumbSrc: "/galerie/IMG_6344.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6347.jpg", thumbSrc: "/galerie/IMG_6347.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6362.jpg", thumbSrc: "/galerie/IMG_6362.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6363.jpg", thumbSrc: "/galerie/IMG_6363.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6364.jpg", thumbSrc: "/galerie/IMG_6364.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6365.jpg", thumbSrc: "/galerie/IMG_6365.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6371.jpg", thumbSrc: "/galerie/IMG_6371.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6373.jpg", thumbSrc: "/galerie/IMG_6373.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6378.jpg", thumbSrc: "/galerie/IMG_6378.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6382.jpg", thumbSrc: "/galerie/IMG_6382.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6383.jpg", thumbSrc: "/galerie/IMG_6383.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6384.jpg", thumbSrc: "/galerie/IMG_6384.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6387.jpg", thumbSrc: "/galerie/IMG_6387.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/IMG_6388.jpg", thumbSrc: "/galerie/IMG_6388.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_00_00..jpg", thumbSrc: "/galerie/MVI_6066.00_00_00_00..jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_00_22..jpg", thumbSrc: "/galerie/MVI_6066.00_00_00_22..jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_00_48.Still007.jpg", thumbSrc: "/galerie/MVI_6066.00_00_00_48.Still007.jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_01_21..jpg", thumbSrc: "/galerie/MVI_6066.00_00_01_21..jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_02_23..jpg", thumbSrc: "/galerie/MVI_6066.00_00_02_23..jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.00_00_04_34..jpg", thumbSrc: "/galerie/MVI_6066.00_00_04_34..jpg", alt: "Imagine din galerie", category: "Imagini noi", type: 'image' },
    { src: "/galerie/MVI_6066.mp4", thumbSrc: "/galerie/MVI_6066_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_1.mp4", thumbSrc: "/galerie/MVI_6066_1_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2.mp4", thumbSrc: "/galerie/MVI_6066_2_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_3.mp4", thumbSrc: "/galerie/MVI_6066_3_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_4.mp4", thumbSrc: "/galerie/MVI_6066_4_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_8.mp4", thumbSrc: "/galerie/MVI_6066_8_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_13.mp4", thumbSrc: "/galerie/MVI_6066_13_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_14.mp4", thumbSrc: "/galerie/MVI_6066_14_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_15.mp4", thumbSrc: "/galerie/MVI_6066_15_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_1.mp4", thumbSrc: "/galerie/MVI_6066_2_1_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_2.mp4", thumbSrc: "/galerie/MVI_6066_2_2_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_3.mp4", thumbSrc: "/galerie/MVI_6066_2_3_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_4.mp4", thumbSrc: "/galerie/MVI_6066_2_4_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_5.mp4", thumbSrc: "/galerie/MVI_6066_2_5_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/MVI_6066_2_6.mp4", thumbSrc: "/galerie/MVI_6066_2_6_first_frame.jpg", alt: "Videoclip din galerie", category: "Videoclipuri", type: 'video' },
    { src: "/galerie/drona/Dji 20251023115606 0112 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023115606 0112 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023115713 0114 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023115713 0114 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023115833 0115 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023115833 0115 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023115906 0116 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023115906 0116 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023115937 0117 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023115937 0117 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120010 0118 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120010 0118 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120035 0119 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120035 0119 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120135 0120 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120135 0120 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120205 0121 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120205 0121 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120219 0122 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120219 0122 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120244 0123 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120244 0123 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
    { src: "/galerie/drona/Dji 20251023120443 0128 D.mp4", thumbSrc: "/galerie/drona/Dji 20251023120443 0128 D_first_frame.jpg", alt: "Video drona", category: "Video drone", type: 'video' },
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
                {image.type === 'video' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '48px',
                      color: 'white',
                      textShadow: '0 0 10px rgba(0,0,0,0.5)',
                      pointerEvents: 'none'
                    }}
                  >
                    ▶
                  </div>
                )}
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
                image.type === 'video' ? (
                  <video
                    key={index}
                    src={image.src}
                    controls
                    muted
                    style={{
                      width: `${100 / galleryImages.length}%`,
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
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
                )
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