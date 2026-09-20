import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenSortingHat, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`archive-nav ${isScrolled ? 'scrolled' : ''}`} id="archiveNav">
      <div className="nav-container">
        <a href="#hero" className="nav-brand" aria-label="Ayush Misra Home" onClick={closeDrawer}>
          <span className="wax-monogram">AM</span>
          <div className="brand-text">
            <span className="brand-title">AYUSH MISRA</span>
            <span className="brand-sub">HOGWARTS ARCHIVE • 2029</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu" id="navMenu" aria-label="Portfolio Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sorting Hat CTA & Mobile Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn-sorting-hat-trigger"
            id="openSortingHatBtn"
            aria-label="Consult the Sorting Hat"
            onClick={onOpenSortingHat}
          >
            <span className="hat-icon" aria-hidden="true">🧙‍♂️</span>
            <span className="hat-text">Sorting Hat</span>
          </button>

          <button
            type="button"
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isDrawerOpen}
            onClick={toggleDrawer}
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`} id="mobileDrawer" aria-hidden={!isDrawerOpen}>
        <div className="drawer-header">
          <span className="drawer-title">AYUSH MISRA • INDEX</span>
          <button
            type="button"
            className="drawer-close"
            id="closeDrawerBtn"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            &times;
          </button>
        </div>
        <nav className="drawer-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="drawer-link"
              onClick={closeDrawer}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="drawer-footer">
          <button
            type="button"
            className="btn-sorting-hat-mobile"
            id="openSortingHatMobileBtn"
            onClick={() => {
              closeDrawer();
              onOpenSortingHat();
            }}
          >
            <span>Consult The Sorting Hat</span>
          </button>
        </div>
      </div>
    </header>
  );
}
