import React from 'react';

export default function Skills() {
  const disciplines = [
    {
      categoryBadge: 'SPELLS',
      title: 'Frontend & Web Engineering',
      desc: 'Building responsive, high-performance interfaces with modern component architectures and clean semantics.',
      techStack: [
        { name: 'JavaScript (ES6+)', note: 'Asynchronous flow, closures, DOM manipulation' },
        { name: 'TypeScript', note: 'Static types, interfaces, structural patterns' },
        { name: 'React & Next.js', note: 'Hooks, component lifecycles, SSR/SSG' },
        { name: 'HTML5 & CSS3', note: 'Semantic structure, CSS Grid, Flexbox, custom variables' },
        { name: 'Tailwind CSS', note: 'Utility-first styling & responsive layouts' }
      ]
    },
    {
      categoryBadge: 'POTION MAKING',
      title: 'Backend Systems & Real-Time APIs',
      desc: 'Engineering low-latency pipelines, real-time telemetry streaming, and modular server architectures.',
      techStack: [
        { name: 'Node.js & Express.js', note: 'RESTful endpoints, middleware, routing' },
        { name: 'WebSockets', note: 'Real-time telemetry streaming (10–30 Hz)' },
        { name: 'REST APIs', note: 'Request validation, JSON payloads, integration' },
        { name: 'Git & GitHub', note: 'Version control, branch workflows, collaborative review' },
        { name: 'VS Code', note: 'Primary IDE, debugging, and development workflow' }
      ]
    },
    {
      categoryBadge: 'ARCANE MACHINES',
      title: '3D Graphics & Visual State',
      featured: true,
      desc: 'Rendering interactive 3D spaces, high-density point clouds, and managing fast state transitions.',
      techStack: [
        { name: 'Three.js', note: 'WebGL scenes, geometries, materials, camera matrices' },
        { name: 'React Three Fiber', note: 'Declarative 3D scenes & bounding box overlays' },
        { name: 'Zustand', note: 'Lightweight client-side state management for 3D UI' },
        { name: 'Java', note: 'Object-oriented programming, algorithms & core logic' }
      ]
    },
    {
      categoryBadge: 'ENGINEERING MIND',
      title: 'Systems & Mechanical Foundation',
      desc: 'Grounding software systems in physical engineering principles, kinematics, and robust problem solving.',
      techStack: [
        { name: 'Systems Integration', note: 'Bridging backend data streams with 3D dashboards' },
        { name: 'Mechanical Engineering', note: 'Kinematics, forces, material tolerances (Univ. of Lucknow)' },
        { name: 'Problem Solving & DSA', note: 'Algorithmic efficiency, time/space complexity' },
        { name: 'Creative Digital Experiences', note: 'Merging photography, storytelling & code' }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">TECHNICAL COMPETENCE</span>
          <h2 className="section-title">Spells & Skills</h2>
          <p className="section-subtitle">
            Hogwarts-inspired thematic disciplines paired with transparent, industry-standard technical proficiencies.
          </p>
        </div>

        <div className="skills-grid-v2">
          {disciplines.map((item, idx) => (
            <div
              key={idx}
              className={`skill-card-v2 ${item.featured ? 'featured-skill-card' : ''}`}
            >
              <div className="skill-card-header">
                <span className="skill-category-badge">{item.categoryBadge}</span>
                <h3 className="skill-card-title">{item.title}</h3>
                <p className="skill-card-desc">{item.desc}</p>
              </div>

              <div className="skill-tags-table">
                {item.techStack.map((tech, tIdx) => (
                  <div key={tIdx} className="skill-tag-row">
                    <span className="tech-name-v2">{tech.name}</span>
                    <span className="tech-note-v2">{tech.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
