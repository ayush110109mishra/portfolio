import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterRecord from './components/CharacterRecord';
import Connection from './components/Connection';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Observer from './components/Observer';
import Achievements from './components/Achievements';
import OwlPost from './components/OwlPost';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import SortingHatModal from './components/SortingHatModal';
import PhotoLightboxModal from './components/PhotoLightboxModal';
import ThroughMyFrames from './components/ThroughMyFrames';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSortingHatOpen, setIsSortingHatOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [userHouse, setUserHouse] = useState(() => {
    try {
      return localStorage.getItem('ayush_hogwarts_house') || null;
    } catch {
      return null;
    }
  });

  // Zero-dependency Route Architecture
  const getInitialRoute = () => {
    try {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/through-my-frames' || path.startsWith('/through-my-frames') || hash === '#/through-my-frames') {
        return 'through-my-frames';
      }
    } catch {
      // ignore
    }
    return 'portfolio';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const navigate = (path) => {
    try {
      window.history.pushState({}, '', path);
    } catch {
      window.location.hash = path === '/through-my-frames' ? '#/through-my-frames' : '';
    }
    const isTmf = path === '/through-my-frames' || path === '#/through-my-frames';
    setCurrentRoute(isTmf ? 'through-my-frames' : 'portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/through-my-frames' || path.startsWith('/through-my-frames') || hash === '#/through-my-frames') {
        setCurrentRoute('through-my-frames');
      } else {
        setCurrentRoute('portfolio');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleHouseSorted = (house) => {
    setUserHouse(house);
    try {
      localStorage.setItem('ayush_hogwarts_house', house);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (currentRoute !== 'portfolio') return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const navOffset = 140;
      const sectionIds = [
        'hero',
        'about',
        'journey',
        'work',
        'contact'
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - navOffset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  // Render standalone Through My Frames photography page if route matches
  if (currentRoute === 'through-my-frames') {
    return <ThroughMyFrames onNavigateHome={() => navigate('/')} />;
  }

  // Render primary engineering portfolio
  return (
    <div className="parchment-theme-wrapper">
      {/* VINTAGE ARCHIVE OVERLAY TEXTURE & VIGNETTE */}
      <div className="archive-grain" aria-hidden="true"></div>
      <div className="archive-vignette" aria-hidden="true"></div>

      {/* STICKY ARCHIVAL NAVIGATION */}
      <Navbar
        onOpenSortingHat={() => setIsSortingHatOpen(true)}
        activeSection={activeSection}
      />

      {/* MAIN CONTENT */}
      <main id="mainContent">
        {/* HERO */}
        <Hero />
        <SectionDivider crest="⚜" />

        {/* CHARACTER RECORD */}
        <CharacterRecord
          userHouse={userHouse}
          onOpenSortingHat={() => setIsSortingHatOpen(true)}
        />

        {/* THE THREE SIDES */}
        <Connection />
        <SectionDivider crest="✦" />

        {/* ABOUT */}
        <About />
        <SectionDivider crest="📜" />

        {/* THE JOURNEY */}
        <Journey />
        <SectionDivider crest="⚡" />

        {/* SPELLS & SKILLS */}
        <Skills />
        <SectionDivider crest="📁" />

        {/* WORK (DARK WORKSHOP CONTRAST THEME) */}
        <Projects />
        <SectionDivider crest="📷" />

        {/* THE OBSERVER DOORWAY TO THROUGH MY FRAMES */}
        <Observer onEnterArchive={() => navigate('/through-my-frames')} />
        <SectionDivider crest="🏆" />

        {/* CURRENT RECORD / VERIFIED MILESTONES */}
        <Achievements />
        <SectionDivider crest="✉️" />

        {/* OWL POST (CONTACT) */}
        <OwlPost />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <SortingHatModal
        isOpen={isSortingHatOpen}
        onClose={() => setIsSortingHatOpen(false)}
        onHouseSorted={handleHouseSorted}
      />

      <PhotoLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
