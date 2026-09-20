import React from 'react';

export default function Connection() {
  return (
    <section className="connection-section" id="connection">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">THE ARCHITECT'S COMPASS</span>
          <h2 className="section-title">The Three Sides of Me</h2>
          <p className="section-subtitle">
            “I observe the world. I build things. I explore what comes next.”
          </p>
        </div>

        {/* Editorial Triad Showcase */}
        <div className="three-sides-editorial">
          {/* Side 01: OBSERVE */}
          <div className="side-block side-observe">
            <div className="side-indicator">
              <span className="side-index">01</span>
              <span className="side-tag">OBSERVE</span>
            </div>
            <div className="side-body">
              <h3 className="side-title">The Observer</h3>
              <span className="side-craft">Photography & Visual Storytelling</span>
              <p className="side-desc">
                Photography taught me to slow down and notice what others miss — spatial geometry, light angles, and subtle patterns. It brings visual intuition to engineering.
              </p>
              <div className="side-creed">
                <span className="creed-quote">“Photography taught me to observe.”</span>
              </div>
            </div>
          </div>

          {/* Transition Path 1 */}
          <div className="side-flow-axis" aria-hidden="true">
            <div className="axis-line"></div>
            <div className="axis-marker">✦</div>
            <span className="axis-text">leads to craft</span>
            <div className="axis-line"></div>
          </div>

          {/* Side 02: BUILD */}
          <div className="side-block side-build featured-side">
            <div className="side-indicator">
              <span className="side-index">02</span>
              <span className="side-tag">BUILD</span>
            </div>
            <div className="side-body">
              <h3 className="side-title">The Builder</h3>
              <span className="side-craft">Software Development & 3D Experiences</span>
              <p className="side-desc">
                Programming taught me to translate observations into living systems — from real-time WebSocket pipelines and 3D LiDAR point clouds to clean web interfaces.
              </p>
              <div className="side-creed">
                <span className="creed-quote">“Development taught me to build.”</span>
              </div>
            </div>
          </div>

          {/* Transition Path 2 */}
          <div className="side-flow-axis" aria-hidden="true">
            <div className="axis-line"></div>
            <div className="axis-marker">✦</div>
            <span className="axis-text">anchors in physics</span>
            <div className="axis-line"></div>
          </div>

          {/* Side 03: EXPLORE */}
          <div className="side-block side-explore">
            <div className="side-indicator">
              <span className="side-index">03</span>
              <span className="side-tag">EXPLORE</span>
            </div>
            <div className="side-body">
              <h3 className="side-title">The Explorer</h3>
              <span className="side-craft">Mechanical Engineering & Future Systems</span>
              <p className="side-desc">
                Mechanical engineering grounds my software in physical reality — kinematics, stresses, mechanisms, and the curiosity of connecting software with robotics.
              </p>
              <div className="side-creed">
                <span className="creed-quote">“Engineering keeps pushing me to explore.”</span>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Bar */}
        <div className="triad-synthesis-bar">
          <p className="synthesis-quote-v2">
            Observation informs what to build. Code turns ideas into systems. Engineering demands they endure in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
