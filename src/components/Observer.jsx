import React from 'react';

export default function Observer({ onEnterArchive }) {
  const handleClick = (e) => {
    if (onEnterArchive) {
      e.preventDefault();
      onEnterArchive();
    }
  };

  return (
    <section className="observer-section doorway-theme" id="observer">
      <div className="section-container">
        <div className="observer-doorway-card">
          <div className="doorway-content-col">
            <div className="doorway-tag-row">
              <span className="doorway-badge">THE OBSERVER • TRANSITIONAL ARCHIVE</span>
              <span className="doorway-serial">ENTRY REF. AM-TMF-2029</span>
            </div>

            <blockquote className="doorway-quote">
              “Some things are built.<br />
              Some things are simply noticed.”
            </blockquote>

            <div className="doorway-title-block">
              <h2 className="doorway-title">Through My Frames</h2>
              <span className="doorway-subtitle">Photography & visual storytelling by Ayush Misra</span>
            </div>

            <p className="doorway-narrative">
              While engineering and software construct living systems, photography is the practice of slowing down to observe light, architectural symmetry, and fleeting perspectives. A separate visual archive dedicated to how Ayush sees the world.
            </p>

            <div className="doorway-actions">
              <a
                href="/through-my-frames"
                className="btn-enter-archive"
                onClick={handleClick}
              >
                <span>ENTER THE OBSERVER ARCHIVE</span>
                <span className="btn-glyph" aria-hidden="true">→</span>
              </a>
              <span className="doorway-disclaimer">Dedicated Visual Archive • Separate Experience</span>
            </div>
          </div>

          <div className="doorway-preview-col">
            <div className="doorway-preview-frame">
              <img
                src="/assets/personal/ayush-observer.jpg"
                alt="Ayush Misra — Field Observation Study at Taj Mahal"
                className="doorway-preview-img"
                loading="lazy"
              />
              <div className="doorway-stamp">ARCHIVAL PREVIEW</div>
              <div className="doorway-preview-caption">
                <span className="preview-caption-tag">Field Note: Architectural Perspective</span>
                <span className="preview-caption-loc">Taj Mahal, Agra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
