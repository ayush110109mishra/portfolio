import React from 'react';

export default function CharacterRecord({ userHouse, onOpenSortingHat }) {
  return (
    <section className="record-section" id="record">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">OFFICIAL ENROLLMENT DOSSIER</span>
          <h2 className="section-title">Character Record</h2>
          <p className="section-subtitle">
            Documented student ledger grounded in real academic and technical pursuits, viewed through the lens of the archives.
          </p>
        </div>

        <div className="dossier-ledger-sheet-v2">
          {/* Header Bar */}
          <div className="ledger-header-v2">
            <div className="ledger-seal-group">
              <div className="seal-icon">🏛️</div>
              <div>
                <span className="ledger-seal-title">UNIVERSITY OF LUCKNOW • ARCHIVAL BRANCH</span>
                <span className="ledger-seal-subtitle">FACULTY OF ENGINEERING & TECHNOLOGY</span>
              </div>
            </div>
            <div className="ledger-status-tag">
              <span className="pulse-indicator"></span>
              ACTIVE UNDERGRADUATE (EXPECTED 2029)
            </div>
          </div>

          <div className="ledger-grid-v2">
            {/* Cell 1: Name */}
            <div className="ledger-cell-v2">
              <span className="ledger-key">FULL NAME</span>
              <span className="ledger-val highlight-val">Ayush Misra</span>
              <span className="ledger-annotation">[ Student, Developer & Observer ]</span>
            </div>

            {/* Cell 2: House */}
            <div className="ledger-cell-v2 house-cell">
              <span className="ledger-key">HOGWARTS HOUSE ASSIGNMENT</span>
              <div className="house-val-wrapper">
                <span className="house-name-display">
                  {userHouse ? userHouse.toUpperCase() : 'PENDING EVALUATION'}
                </span>
                <button
                  type="button"
                  className="btn-house-sort-link"
                  onClick={onOpenSortingHat}
                >
                  {userHouse ? 'Consult Hat Again ↗' : 'Let Hat Decide ↗'}
                </button>
              </div>
              <span className="ledger-annotation">[ Determined via Sorting Hat Ceremony ]</span>
            </div>

            {/* Cell 3: Primary Role */}
            <div className="ledger-cell-v2">
              <span className="ledger-key">ACADEMIC ROLE</span>
              <span className="ledger-val">Mechanical Engineering Student</span>
              <span className="ledger-annotation">University of Lucknow • 2nd Year (2025–2029)</span>
            </div>

            {/* Cell 4: Second Path */}
            <div className="ledger-cell-v2">
              <span className="ledger-key">SECOND PATH</span>
              <span className="ledger-val">Full-Stack Software Development</span>
              <span className="ledger-annotation">React • Next.js • Three.js • Node.js • WebSockets</span>
            </div>

            {/* Cell 5: Current Quest (Full Width) */}
            <div className="ledger-cell-v2 cell-full-v2">
              <span className="ledger-key">CURRENT QUEST</span>
              <p className="quest-text-v2">
                Exploring <strong>engineering, software</strong>, and the intersection of digital systems with the physical world — building real-time dashboards, interactive 3D visualizations, and advancing toward robotics and simulation.
              </p>
            </div>

            {/* Cell 6: Craft */}
            <div className="ledger-cell-v2">
              <span className="ledger-key">CREATIVE CRAFT</span>
              <span className="ledger-val">Photography & Visual Storytelling</span>
              <span className="ledger-annotation">Documenting architectural lines, light, and urban frames</span>
            </div>

            {/* Cell 7: Traits */}
            <div className="ledger-cell-v2">
              <span className="ledger-key">CHARACTER TRAITS</span>
              <div className="traits-badges-v2">
                <span className="trait-pill-v2">Curious</span>
                <span className="trait-pill-v2">Observant</span>
                <span className="trait-pill-v2">Builder</span>
              </div>
              <span className="ledger-annotation">Driven by how things look, work, and connect</span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="ledger-footer-v2">
            <span className="archival-stamp ink-red">RECORD VERIFIED: UNLV-LKO-2029</span>
            <span className="archival-stamp ink-gold">GENUINE ACADEMIC RECORD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
