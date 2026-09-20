import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="section-container hero-container-v2">
        {/* Archival Banner Tag */}
        <div className="docket-stamp-banner">
          <span className="docket-seal">HOGWARTS ARCHIVES • APPRENTICE DOSSIER</span>
          <span className="docket-meta">RECORD REF. AM-ME-2029 • LUCKNOW</span>
        </div>

        {/* Balanced Editorial Hero Grid */}
        <div className="hero-editorial-grid">
          {/* Left Column: Personal Character Focus */}
          <div className="hero-content-col">
            <span className="hero-pretitle">PERSONAL RECORD • ORIGINAL CHARACTER</span>
            <h1 className="hero-name-v2">AYUSH MISRA</h1>

            <div className="hero-role-block">
              <span className="hero-academic-badge">Mechanical Engineering Student</span>
              <span className="hero-subtext">University of Lucknow • Class of 2029</span>
            </div>

            <p className="hero-character-triad-pills">
              <span className="triad-chip">Developer</span>
              <span className="triad-chip-sep">•</span>
              <span className="triad-chip">Explorer</span>
              <span className="triad-chip-sep">•</span>
              <span className="triad-chip">Photographer</span>
            </p>

            <blockquote className="hero-statement-v2">
              “I like noticing how things work, building what I imagine, and capturing what I notice.”
            </blockquote>

            <p className="hero-narrative-lead">
              An engineering student from the Muggle world who discovered the magic of building things with code, machines, and creativity.
            </p>

            <div className="hero-actions-v2">
              <a href="#about" className="btn-hero-primary">
                <span className="btn-text">Enter The Archives</span>
                <span className="btn-glyph" aria-hidden="true">📜</span>
              </a>
              <a href="#work" className="btn-hero-secondary">
                <span className="btn-text">View My Work</span>
                <span className="btn-glyph" aria-hidden="true">→</span>
              </a>
            </div>

            <div className="hero-meta-strip">
              <div className="meta-strip-item">
                <span className="meta-strip-label">FOCUS</span>
                <span className="meta-strip-val">Full-Stack Software & Systems</span>
              </div>
              <div className="meta-strip-divider"></div>
              <div className="meta-strip-item">
                <span className="meta-strip-label">CRAFT</span>
                <span className="meta-strip-val">Visual Storytelling & 3D Web</span>
              </div>
            </div>
          </div>

          {/* Right Column: Archival Portrait Plate */}
          <div className="hero-portrait-col">
            <div className="portrait-plate-frame">
              <div className="portrait-corner corner-tl" aria-hidden="true"></div>
              <div className="portrait-corner corner-tr" aria-hidden="true"></div>
              <div className="portrait-corner corner-bl" aria-hidden="true"></div>
              <div className="portrait-corner corner-br" aria-hidden="true"></div>

              <div className="portrait-inner-matte">
                <img
                  src="/assets/personal/ayush-portrait.jpg"
                  alt="Ayush Misra — Mechanical Engineering Student & Developer"
                  className="portrait-img"
                  loading="eager"
                />
                <div className="portrait-archival-stamp">
                  <span>RECORD VERIFIED</span>
                </div>
              </div>

              <div className="portrait-plate-caption">
                <div className="caption-heading">
                  <span className="caption-name">Ayush Misra</span>
                  <span className="caption-badge">Active</span>
                </div>
                <p className="caption-dept">Dept. of Mechanical Engineering</p>
                <p className="caption-inst">University of Lucknow • Expected 2029</p>
                <div className="caption-entry-tag">DOSSIER #AM-2029-EXP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
