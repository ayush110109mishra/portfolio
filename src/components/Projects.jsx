import React, { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({ 'sih-lidar': true });

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const tabs = [
    { key: 'all', label: 'All Works' },
    { key: 'systems', label: 'Systems & 3D' },
    { key: 'creative', label: 'Creative & Web' }
  ];

  const projects = [
    {
      id: 'sih-lidar',
      featured: true,
      category: 'systems',
      badge: 'FEATURED • SMART INDIA HACKATHON',
      title: '3D LiDAR Perception & Foveated 2.5D Mapping Platform',
      role: 'Full-Stack Developer & Systems Integration',
      tagline: 'Real-time telemetry streaming and high-throughput 3D point cloud visualization for autonomous perception evaluation.',
      technologies: ['Next.js', 'React Three Fiber', 'Three.js', 'Node.js', 'Express', 'WebSockets', 'Tailwind CSS', 'Zustand'],
      metrics: [
        { label: 'POINTS / FRAME', value: '15,000+' },
        { label: 'RENDERING', value: '60 FPS' },
        { label: 'GRID CELLS', value: '8,000+' },
        { label: 'STREAMING', value: '10–30 Hz' }
      ],
      description: 'Engineered for evaluation during the Smart India Hackathon, this platform processes high-density LiDAR data in real time. As the Full-Stack Developer handling systems integration, I architected the end-to-end pipeline connecting backend WebSocket telemetry streams to an interactive 3D browser client.',
      highlights: [
        'Real-time WebSocket streaming in Node.js/Express synchronizing LiDAR frames and vehicle telemetry at 10–30 Hz.',
        'Interactive Next.js client rendering 15,000+ points per frame at a locked 60 FPS using React Three Fiber and Three.js.',
        'Dynamic 3D bounding-box overlays identifying spatial obstacles in real time.',
        'Foveated 2.5D grid representation allocating computational resolution across 8,000+ grid cells.',
        'REST API layer supporting session playback, temporal scrubbing, analytics panels, and a guided evaluation presentation mode.'
      ],
      repoNote: 'Repository & demo available upon request for evaluation.'
    },
    {
      id: 'through-my-frames',
      featured: false,
      category: 'creative',
      badge: 'VISUAL JOURNAL',
      title: 'Through My Frames — Visual Storytelling Platform',
      role: 'Designer, Photographer & Frontend Developer',
      tagline: 'An independent web archive exploring photographic observation, editorial typography, and architectural geometry.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive UI'],
      metrics: [
        { label: 'DISCIPLINE', value: 'Photography' },
        { label: 'LAYOUT', value: 'Editorial' },
        { label: 'VIEWING', value: 'Distraction-Free' }
      ],
      description: 'Rather than treating photography as casual social media posts, Through My Frames is structured like an archival journal. Built with clean, accessible HTML, CSS, and vanilla JavaScript, the platform emphasizes spatial symmetry, atmospheric lighting, and the observational habits that inform my engineering mindset.',
      highlights: [
        'Distraction-free, minimal aesthetic focusing on photographic composition and light.',
        'Zero external frontend dependencies, optimized for immediate image loading.',
        'Curated photo records detailing perspective notes and focal observations.'
      ],
      repoNote: 'Open-source web archive hosted on GitHub.'
    },
    {
      id: 'tic-tac-toe',
      featured: false,
      category: 'creative',
      badge: 'BROWSER APPLICATION',
      title: 'Interactive Tic-Tac-Toe Game Engine',
      role: 'Frontend Developer',
      tagline: 'A clean, browser-based strategy game emphasizing state management, turn logic, and dynamic DOM updates.',
      technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM API'],
      metrics: [
        { label: 'DEPENDENCY', value: 'Zero Libs' },
        { label: 'LOGIC', value: 'State Engine' },
        { label: 'RUNTIME', value: 'Vanilla JS' }
      ],
      description: 'A foundational project focused on building solid software fundamentals without third-party frameworks. Implements complete game state loops, win/draw condition evaluations, move history tracking, and responsive user feedback through direct DOM updates.',
      highlights: [
        'Modular game-loop architecture separating game rules from DOM rendering.',
        'Win-line trajectory detection and interactive restart triggers.',
        'Clean responsive layout styled with modern CSS variables.'
      ],
      repoNote: 'Codebase available on GitHub.'
    }
  ];

  const filteredProjects = projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section className="projects-section dark-workshop-theme" id="work">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label gold-accent">THE WORKSHOP & ARCHIVES</span>
          <h2 className="section-title text-light">Selected Works</h2>
          <p className="section-subtitle light-subtitle">
            Documented engineering projects, real-time systems, and creative platforms built with code.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="archive-filter-bar filter-bar-dark" role="tablist" aria-label="Project Categories">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`filter-btn-dark ${activeTab === t.key ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === t.key}
              onClick={() => setActiveTab(t.key)}
            >
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="projects-display-stack">
          {filteredProjects.map((p) => {
            const isExpanded = !!expandedProjects[p.id];
            return (
              <article
                key={p.id}
                className={`project-dossier-card ${p.featured ? 'featured-work-card' : ''}`}
              >
                {/* Top Banner */}
                <div className="project-card-header">
                  <span className="project-badge-pill">{p.badge}</span>
                  <span className="project-role-tag">{p.role}</span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-tagline">{p.tagline}</p>

                  {/* The Builder at Work — Archival Visual Plate */}
                  {p.featured && (
                    <div className="builder-workspace-plate">
                      <div className="builder-img-frame">
                        <img
                          src="/assets/personal/ayush-builder.jpg"
                          alt="Ayush Misra — Systems Builder at workspace"
                          className="builder-workspace-img"
                          loading="lazy"
                        />
                        <div className="builder-plate-badge">
                          <span className="badge-icon">⚡</span>
                          <span>THE BUILDER AT WORK • WORKSPACE DOSSIER</span>
                        </div>
                      </div>
                      <div className="builder-plate-caption">
                        <span className="builder-caption-title">Systems Architecture & Real-Time Visualization</span>
                        <p className="builder-caption-desc">
                          Ayush Misra architecting WebSocket telemetry streaming pipelines, synchronizing 15,000+ 3D LiDAR point clouds at 60 FPS in browser clients.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Documented Metrics Panel */}
                  <div className="project-metrics-grid">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="metric-box">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-chips">
                    {p.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-chip">{t}</span>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="btn-project-dossier-toggle"
                    aria-expanded={isExpanded}
                    onClick={() => toggleProject(p.id)}
                  >
                    <span>{isExpanded ? 'Fold Dossier Specifications' : 'Inspect Detailed Architecture & Specs'}</span>
                    <span className="toggle-chevron">{isExpanded ? '▲' : '▼'}</span>
                  </button>

                  {/* Expanded Specification Details */}
                  {isExpanded && (
                    <div className="project-expanded-specs">
                      <div className="specs-inner">
                        <h4 className="specs-heading">Project Overview & Problem Statement</h4>
                        <p className="specs-paragraph">{p.description}</p>

                        <h4 className="specs-heading">Key Implementation Highlights</h4>
                        <ul className="specs-list">
                          {p.highlights.map((h, hIdx) => (
                            <li key={hIdx}>
                              <span className="bullet-glyph">✦</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="specs-footer-note">
                          <span className="repo-note-text">{p.repoNote}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
