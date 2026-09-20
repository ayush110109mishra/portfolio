import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-layout-v2">
          {/* Left Column: Academic & Personal Summary Card */}
          <div className="about-profile-sidebar-v2">
            <div className="profile-frame-v2">
              <div className="profile-inner-v2">
                <div className="sidebar-photo-frame">
                  <img
                    src="/assets/personal/ayush-character.jpg"
                    alt="Ayush Misra — Character Identity"
                    className="sidebar-photo-img"
                    loading="lazy"
                  />
                  <div className="sidebar-photo-tag">RECORD IDENTIFIER</div>
                </div>
                <h3 className="sidebar-name-v2">Ayush Misra</h3>
                <span className="sidebar-degree">B.Tech in Mechanical Engineering</span>
                <span className="sidebar-inst">University of Lucknow • 2025–2029</span>

                <div className="sidebar-divider-v2"></div>

                <div className="sidebar-facts-list">
                  <div className="fact-item">
                    <span className="fact-label">CURRENT PROFILE</span>
                    <span className="fact-val">Full-Stack Developer & Engineering Undergrad</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">CORE CRAFT</span>
                    <span className="fact-val">React, Three.js, Node.js & Mechanisms</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">OBSERVATION</span>
                    <span className="fact-val">Photography & Visual Storytelling</span>
                  </div>
                </div>

                <div className="sidebar-status-tag">
                  <span>ACTIVE APPRENTICE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Student Narrative */}
          <div className="about-narrative-v2">
            <span className="section-label">ABOUT THE PERSON</span>
            <h2 className="section-title">An Engineering Student with a Parallel Passion for Software</h2>

            <div className="about-prose-v2">
              <p className="lead-text-v2">
                I’m <strong>Ayush Misra</strong>, a second-year Mechanical Engineering undergraduate at the <strong>University of Lucknow</strong>. Alongside my core mechanical studies, I have built a dedicated full-stack software profile focusing on interactive web interfaces, real-time data streaming, and 3D visual experiences.
              </p>

              <p>
                My approach to building software is shaped by my engineering foundation. In mechanical systems, every millimeter and stress concentration matters. I bring that same care to software — ensuring that user interfaces render smoothly at 60 FPS, WebSocket pipelines stream without dropped frames, and component architectures remain clean and maintainable.
              </p>

              <div className="about-pillars-duo">
                <div className="pillar-box">
                  <h4 className="pillar-title">What I Enjoy Building</h4>
                  <p className="pillar-text">
                    Interactive web tools and 3D experiences that make complex data intuitive — like the Smart India Hackathon platform where our team streamed synchronized LiDAR point clouds at 60 FPS into React Three Fiber dashboards.
                  </p>
                </div>

                <div className="pillar-box">
                  <h4 className="pillar-title">What Drives My Curiosity</h4>
                  <p className="pillar-text">
                    Exploring how software meets the physical world. While completing my engineering coursework, I continuously learn modern web technologies, 3D visualization, and explore future intersections with robotics and simulation.
                  </p>
                </div>
              </div>

              <p className="closing-text-v2">
                Beyond screens and workshops, photography and writing are my ways of slowing down and paying attention. Whether framing shadows in architectural corridors or capturing candid street frames, observation keeps me grounded as a creator.
              </p>

              <div className="about-signature-row">
                <div className="signature-name">Ayush Misra</div>
                <span className="signature-label">University of Lucknow • Mechanical Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
