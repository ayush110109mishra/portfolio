import React, { useState, useEffect } from 'react';
import PhotoLightboxModal from './PhotoLightboxModal';

export default function ThroughMyFrames({ onNavigateHome }) {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Through My Frames — Photography by Ayush Misra";
    return () => {
      document.title = "Ayush Misra — Engineering Student & Developer | Portfolio";
    };
  }, []);

  const handleReturn = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  const curatedExhibition = [
    {
      id: 'photo07',
      src: '/assets/photos/photo07.jpeg',
      title: 'ARCHITECTURAL SYMMETRY & SCALE',
      meta: 'Taj Mahal / Agra',
      category: 'ARCHITECTURE',
      role: 'LEAD / HERO',
      movementClass: 'tmf-lead-movement',
      desc: 'White marble symmetry framed by natural tree branches, rising above the sandstone promenade.'
    },
    {
      id: 'photo03',
      src: '/assets/photos/photo03.jpeg',
      title: 'HUMAN & LANDSCAPE',
      meta: 'Agrarian Life & Paddy Fields',
      category: 'LANDSCAPE & CULTURE',
      role: 'FEATURE',
      movementClass: 'tmf-feature-movement',
      desc: 'Human presence and daily agricultural rhythm — a saree, a bicycle, and flooded green terraces under an expansive canopy.'
    },
    {
      id: 'photo06',
      src: '/assets/photos/photo06.jpeg',
      title: 'ORGANIC DETAIL',
      meta: 'Botanical Karonda Macro',
      category: 'BOTANICAL DETAIL',
      role: 'DETAIL',
      movementClass: 'tmf-detail-movement',
      desc: 'Intimate organic geometry of wild Karonda leaves and ripening berries, capturing natural patterns in shallow light.'
    },
    {
      id: 'photo08',
      src: '/assets/photos/photo08.jpeg',
      title: 'LIGHT & ATMOSPHERE',
      meta: 'River Sunset & Moored Boats',
      category: 'LIGHT & MEDITATION',
      role: 'FINALE',
      movementClass: 'tmf-finale-movement',
      desc: 'Twilight stillness across open water — vertical sunlight reflections and silent silhouettes of moored riverboats.'
    }
  ];

  return (
    <div className="tmf-page-wrapper">
      {/* Texture & Vignette */}
      <div className="tmf-grain-overlay" aria-hidden="true"></div>

      {/* Standalone Minimal Navigation */}
      <header className="tmf-minimal-nav">
        <div className="tmf-nav-container">
          <a
            href="/"
            className="tmf-back-link"
            onClick={handleReturn}
          >
            <span className="back-arrow" aria-hidden="true">←</span>
            <span>Return to Portfolio</span>
          </a>

          <div className="tmf-nav-brand">
            <span className="tmf-brand-symbol">✦</span>
            <span className="tmf-brand-text">THROUGH MY FRAMES</span>
          </div>

          <div className="tmf-nav-tag">
            <span>CURATED EXHIBITION</span>
          </div>
        </div>
      </header>

      {/* Main Exhibition Stage */}
      <main className="tmf-stage-main">
        <div className="tmf-container">
          {/* Editorial Header */}
          <header className="tmf-hero-header">
            <h1 className="tmf-hero-title">THROUGH MY FRAMES</h1>
            <p className="tmf-hero-sub">
              Photography & visual storytelling<br />
              <span className="tmf-author">by Ayush Misra</span>
            </p>
            <p className="tmf-hero-note">
              An independent visual journal exploring geometry, quiet light, and fleeting perspective.
            </p>
          </header>

          {/* Curated Photographic Suite */}
          <div className="tmf-exhibition-suite">
            {curatedExhibition.map((item, index) => (
              <article
                key={item.id}
                className={`tmf-movement-block ${item.movementClass}`}
              >
                <div
                  className="tmf-photo-frame"
                  onClick={() => setActivePhoto(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePhoto(item);
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="tmf-photo-img"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="tmf-frame-overlay">
                    <span className="tmf-expand-prompt">View Print</span>
                  </div>
                </div>

                <div className="tmf-caption-block">
                  <h2 className="tmf-caption-title">{item.title}</h2>
                  {item.meta && (
                    <span className="tmf-caption-meta">{item.meta}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Exit Section */}
          <div className="tmf-exit-section">
            <a
              href="/"
              className="tmf-exit-link"
              onClick={handleReturn}
            >
              <span className="exit-arrow" aria-hidden="true">←</span>
              <span>RETURN TO PORTFOLIO</span>
            </a>
          </div>
        </div>
      </main>

      {/* Standalone Minimal Footer */}
      <footer className="tmf-minimal-footer">
        <div className="tmf-container footer-flex">
          <span className="tmf-footer-copy">
            Through My Frames • Photography by Ayush Misra
          </span>
          <a
            href="/"
            className="tmf-footer-back-link"
            onClick={handleReturn}
          >
            Return to Portfolio ↑
          </a>
        </div>
      </footer>

      {/* Reusable Lightbox Modal */}
      <PhotoLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
