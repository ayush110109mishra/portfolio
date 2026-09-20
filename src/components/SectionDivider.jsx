import React from 'react';

export default function SectionDivider({ crest = '✦' }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <div className="divider-line"></div>
      <div className="divider-crest">{crest}</div>
      <div className="divider-line"></div>
    </div>
  );
}
