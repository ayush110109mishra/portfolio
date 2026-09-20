import React from 'react';

export default function Journey() {
  const chapters = [
    {
      id: 'chapter1',
      numeral: 'CHAPTER I',
      era: 'ORIGIN',
      title: 'The First Spark',
      summary: 'Beginning the journey into technology, tinkering, and writing the first lines of code.',
      paragraphs: [
        'Curiosity started with taking small mechanical gadgets apart to see how gears and switches fit together. When I discovered programming, code felt like an extension of that same mechanical impulse — writing instructions and watching logic come alive on a screen.',
        'Learning foundational programming in languages like Java and JavaScript taught me that code isn’t just syntax; it is structured problem solving.'
      ],
      annotationKey: 'Early Lesson:',
      annotationVal: 'Curiosity turns passive users into active builders.'
    },
    {
      id: 'chapter2',
      numeral: 'CHAPTER II',
      era: 'FOUNDATION',
      title: 'The Digital World',
      summary: 'Developing skills in web development, interface design, and building real browser projects.',
      paragraphs: [
        'I dove deep into the modern web ecosystem — HTML5, CSS3, ES6+ JavaScript, and responsive design. Building browser-based projects like an Interactive Tic-Tac-Toe game grounded me in state management, turn logic, and dynamic DOM manipulation.',
        'From there, I expanded into React, Next.js, and TypeScript, learning how component architectures and modern build tools create reliable digital experiences.'
      ],
      annotationKey: 'Web Principle:',
      annotationVal: 'Clean interfaces require empathy for the person using them.'
    },
    {
      id: 'chapter3',
      numeral: 'CHAPTER III',
      era: 'CRAFT & SYSTEMS',
      title: 'The Builder',
      summary: 'Working on complex visualization systems, WebSockets, and high-performance 3D graphics.',
      paragraphs: [
        'My work scaled significantly during our Smart India Hackathon team project — building a 3D LiDAR Perception & Foveated 2.5D Mapping Platform. As the Full-Stack Developer handling systems integration, I built Node.js WebSocket streaming pipelines synchronized at 10–30 Hz.',
        'Rendering 15,000+ point-cloud points at 60 FPS in React Three Fiber with 3D bounding boxes and session replay showed me the power of combining software performance with visual clarity.'
      ],
      annotationKey: 'Key Milestone:',
      annotationVal: 'Smart India Hackathon: Real-time 3D telemetry and high-throughput visualization.'
    },
    {
      id: 'chapter4',
      numeral: 'CHAPTER IV',
      era: 'ACADEMIA',
      title: 'The Engineer',
      summary: 'Pursuing Mechanical Engineering at the University of Lucknow and developing systems thinking.',
      image: '/assets/personal/ayush-engineering.jpg',
      imageAlt: 'Ayush Misra at Faculty of Engineering & Technology, University of Lucknow',
      imageHeading: 'Faculty of Engineering & Technology',
      imageSub: 'University of Lucknow • Dept. of Mechanical Engineering',
      paragraphs: [
        'Entering the Mechanical Engineering program at the University of Lucknow introduced rigorous physical constraints. Studying kinematics of machines, material tolerances, and structural forces gave my software mindset a physical anchor.',
        'Mechanical engineering taught me that software errors can be caught in catch blocks, but physical mechanisms must endure real-world stresses and fatigue.'
      ],
      annotationKey: 'Engineering Outlook:',
      annotationVal: 'Physical systems demand respect for tolerances and fundamental laws.'
    },
    {
      id: 'chapter5',
      numeral: 'CHAPTER V',
      era: 'THE HORIZON',
      isCurrentQuest: true,
      title: 'The Next Quest',
      summary: 'Exploring the intersection of software, engineering, and future directions in robotics and simulation.',
      paragraphs: [
        'Today, my ongoing path connects all three sides: the observer who pays attention to detail, the software developer who builds high-performance tools, and the mechanical student curious about physical mechanisms.',
        'I am actively studying simulation environments, kinematics, and intelligent systems — aiming to bridge digital software with physical machines as my engineering degree advances toward 2029.'
      ],
      annotationKey: 'Next Horizon:',
      annotationVal: 'Bridging full-stack software with mechanical systems and autonomous simulation.'
    }
  ];

  return (
    <section className="journey-section" id="journey">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-label">CHRONICLES OF AN APPRENTICE</span>
          <h2 className="section-title">The Journey</h2>
          <p className="section-subtitle">
            A factual account of how curiosity shaped an engineering student into a full-stack builder and observer.
          </p>
        </div>

        <div className="chapters-codex">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              className={`chapter-scroll ${chapter.isCurrentQuest ? 'current-quest-chapter' : ''}`}
              id={chapter.id}
            >
              <div className="chapter-ribbon">
                <span className="chapter-numeral">{chapter.numeral}</span>
                <span className="chapter-era">{chapter.era}</span>
              </div>
              <div className="chapter-main">
                {chapter.isCurrentQuest && (
                  <div className="quest-active-flag">CURRENT QUEST IN PROGRESS</div>
                )}
                <h3 className="chapter-title">{chapter.title}</h3>
                <p className="chapter-summary">{chapter.summary}</p>
                <div className="chapter-narrative">
                  {chapter.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {chapter.image && (
                  <div className="chapter-visual-plate">
                    <div className="chapter-visual-frame">
                      <img
                        src={chapter.image}
                        alt={chapter.imageAlt}
                        className="chapter-engineering-img"
                        loading="lazy"
                      />
                      <div className="chapter-visual-stamp">ACADEMIC DOSSIER</div>
                    </div>
                    <div className="chapter-visual-caption">
                      <span className="visual-plate-title">{chapter.imageHeading}</span>
                      <span className="visual-plate-sub">{chapter.imageSub}</span>
                    </div>
                  </div>
                )}
                <div className="chapter-annotation">
                  <span className="annotation-key">{chapter.annotationKey}</span>
                  <span className="annotation-val">{chapter.annotationVal}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
