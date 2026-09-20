import React from 'react';

export default function Achievements() {
  const verifiedRecords = [
    {
      badge: '⚡',
      category: 'NATIONAL HACKATHON TEAM PROJECT',
      name: 'Smart India Hackathon Evaluation',
      desc: 'Full-Stack Developer & Systems Integration for the 3D LiDAR Perception & Foveated 2.5D Mapping Platform. Streamed real-time telemetry via WebSockets and rendered 15,000+ points/frame at 60 FPS.',
      institution: 'Team Project • Smart India Hackathon'
    },
    {
      badge: '🏛️',
      category: 'ACADEMIC ENROLLMENT',
      name: 'Mechanical Engineering Undergraduate',
      desc: 'Second-year undergraduate pursuing B.Tech in Mechanical Engineering. Developing foundations in kinematics, machines, material sciences, and physical systems.',
      institution: 'University of Lucknow • Expected 2029'
    },
    {
      badge: '📷',
      category: 'INDEPENDENT CREATIVE ARCHIVE',
      name: 'Through My Frames — Creator',
      desc: 'Independent observational photography and visual storytelling archive focused on architectural symmetry, light dynamics, and street perspective.',
      institution: 'Personal Creative Endeavor • Web & Photography'
    },
    {
      badge: '⚙️',
      category: 'SELF-DIRECTED CRAFT',
      name: 'Parallel Software Engineering Profile',
      desc: 'Self-directed engineering path building modern web systems: React, Next.js, Three.js, React Three Fiber, Node.js, WebSockets, and full-stack software development.',
      institution: 'Continuous Practical Implementation'
    }
  ];

  return (
    <section className="achievements-section" id="milestones">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">VERIFIED ACADEMIC & TECHNICAL MILESTONES</span>
          <h2 className="section-title">Current Record</h2>
          <p className="section-subtitle">
            A transparent ledger of actual collegiate studies, hackathon team systems, and creative projects.
          </p>
        </div>

        <div className="records-scroll-grid">
          {verifiedRecords.map((rec, idx) => (
            <div key={idx} className="record-item-v2">
              <div className="record-badge-icon">{rec.badge}</div>
              <div className="record-content-v2">
                <span className="record-cat-label">{rec.category}</span>
                <h3 className="record-heading">{rec.name}</h3>
                <p className="record-body">{rec.desc}</p>
                <span className="record-org-tag">{rec.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
