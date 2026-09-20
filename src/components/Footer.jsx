import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="archive-footer">
      <div className="section-container footer-container">
        <div className="footer-seal-mark">
          <span className="seal-glyph">✦</span>
        </div>

        <p className="footer-title">AYUSH MISRA • THE HOGWARTS ARCHIVES</p>

        <p className="footer-sub">
          Mechanical Engineering Student at University of Lucknow • Full-Stack Developer & Observer.
        </p>

        <div className="footer-meta-links">
          <a href="#hero">Home</a>
          <span className="footer-sep">•</span>
          <a href="#about">About</a>
          <span className="footer-sep">•</span>
          <a href="#journey">Journey</a>
          <span className="footer-sep">•</span>
          <a href="#work">Work</a>
          <span className="footer-sep">•</span>
          <a href="#observer">Observer</a>
          <span className="footer-sep">•</span>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom-bar">
          <span className="copyright">
            Designed & coded for the college portfolio competition. Built with React + Vite.
          </span>
          <button
            type="button"
            className="back-to-top"
            id="backToTopBtn"
            aria-label="Return to top of page"
            onClick={scrollToTop}
          >
            <span>Top of Tower</span>
            <span aria-hidden="true">▲</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
