import React, { useState, useEffect } from 'react';

export default function SortingHatModal({ isOpen, onClose, onHouseSorted }) {
  const [stage, setStage] = useState('intro'); // 'intro' | 'quiz' | 'result'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [scores, setScores] = useState({
    Gryffindor: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
    Slytherin: 0
  });

  const sortingQuestions = [
    {
      prompt: 'When confronted with an unsolved puzzle in the workshop, what is your primary instinct?',
      options: [
        {
          house: 'Ravenclaw',
          text: 'Study the schematics, research underlying laws, and simulate the system before touching a tool.'
        },
        {
          house: 'Gryffindor',
          text: 'Dive straight in, build a rapid mechanism by hand, and learn boldly through trial and error.'
        },
        {
          house: 'Hufflepuff',
          text: 'Verify each joint, tolerance, and fastener to ensure the build is sturdy and built to endure.'
        },
        {
          house: 'Slytherin',
          text: 'Identify the cleverest, most high-leverage route that yields maximum impact and performance.'
        }
      ]
    },
    {
      prompt: 'Which artifact from the enchanted workshop resonates most with your curiosity?',
      options: [
        {
          house: 'Ravenclaw',
          text: 'The Diadem of Insight: Revealing hidden kinematic equations and predictive simulations.'
        },
        {
          house: 'Gryffindor',
          text: 'The Sword of Godric: Cutting cleanly through obstacles with decisive execution.'
        },
        {
          house: 'Hufflepuff',
          text: 'The Golden Cup: Reliable, tireless craft that quietly empowers everyday life.'
        },
        {
          house: 'Slytherin',
          text: 'The Silver Locket: Mastering intricate systems and orchestrating complex forces.'
        }
      ]
    },
    {
      prompt: 'What inspires your character most as you look to the horizon?',
      options: [
        {
          house: 'Ravenclaw',
          text: 'Unraveling digital twins, autonomous simulation, and deep computational principles.'
        },
        {
          house: 'Gryffindor',
          text: 'Tackling ambitious physical robotics challenges where others hesitate to venture.'
        },
        {
          house: 'Hufflepuff',
          text: 'Crafting genuine, practical technology that helps real people and withstands time.'
        },
        {
          house: 'Slytherin',
          text: 'Pioneering revolutionary inventions that set new benchmarks in modern engineering.'
        }
      ]
    }
  ];

  const houseProfiles = {
    Ravenclaw: {
      emoji: '🦅',
      name: 'RAVENCLAW',
      motto: '“Wit beyond measure is man’s greatest treasure.”',
      verdict:
        'Your analytical nature seeks deep understanding before execution. Like an engineer dissecting 3D point cloud algorithms, you break down complex systems into mathematical clarity. The archives welcome your sharp intellect.'
    },
    Gryffindor: {
      emoji: '🦁',
      name: 'GRYFFINDOR',
      motto: '“Where dwell the brave at heart, their daring nerve and chivalry set them apart.”',
      verdict:
        'You build with bold initiative and fearlessness. When WebSocket streams fail or mechanical tolerances bend under stress, you tackle the workshop challenge head-on. Daring spirit fuels your engineering craft.'
    },
    Hufflepuff: {
      emoji: '🦡',
      name: 'HUFFLEPUFF',
      motto: '“Where they are just and loyal, patient and true, and unafraid of toil.”',
      verdict:
        'You represent the foundation of great engineering: patience, structural reliability, and selfless dedication to craft. You care that things actually work well for real humans, built without pretense or shortcuts.'
    },
    Slytherin: {
      emoji: '🐍',
      name: 'SLYTHERIN',
      motto: '“Those cunning folk use any means to achieve their ends.”',
      verdict:
        'You possess sharp architectural ambition and strategic precision. You refuse to settle for mediocre builds and seek to master high-leverage technologies that change the playing field. Greatness awaits your designs.'
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStage('intro');
      setCurrentQIndex(0);
      setScores({ Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStart = () => {
    setStage('quiz');
    setCurrentQIndex(0);
  };

  const handleSelectOption = (house) => {
    const updatedScores = {
      ...scores,
      [house]: scores[house] + 1
    };
    setScores(updatedScores);

    if (currentQIndex + 1 < sortingQuestions.length) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setStage('result');
      // Determine winner and notify parent
      let winner = 'Ravenclaw';
      let maxScore = -1;
      for (const [h, s] of Object.entries(updatedScores)) {
        if (s > maxScore) {
          maxScore = s;
          winner = h;
        }
      }
      if (onHouseSorted) {
        onHouseSorted(winner);
      }
    }
  };

  const handleRetry = () => {
    setScores({ Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 });
    setCurrentQIndex(0);
    setStage('quiz');
  };

  const handleReturnToArchives = () => {
    onClose();
    const recordSection = document.getElementById('record');
    if (recordSection) {
      recordSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let winningHouse = 'Ravenclaw';
  let maxScore = -1;
  for (const [house, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      winningHouse = house;
    }
  }
  const resultProfile = houseProfiles[winningHouse] || houseProfiles.Ravenclaw;
  const currentQ = sortingQuestions[currentQIndex];
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div
      className="modal-backdrop"
      id="sortingHatModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sortingHatTitle"
      onClick={(e) => {
        if (e.target.id === 'sortingHatModal') onClose();
      }}
    >
      <div className="modal-dialog parchment-modal">
        <button
          type="button"
          className="modal-close-btn"
          id="closeSortingHatBtn"
          aria-label="Close Sorting Hat Ceremony"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="hat-ceremony-content">
          {stage === 'intro' && (
            <div className="hat-stage" id="hatIntroStage">
              <div className="hat-crest-icon">🧙‍♂️</div>
              <span className="modal-pretitle">ANCIENT HOGWARTS CEREMONY</span>
              <h3 className="modal-title" id="sortingHatTitle">The Sorting Hat Considers You</h3>
              <p className="modal-description">
                “Ah, another curious mind approaches the archives. Let us see where your instincts in building, observing, and problem solving belong...”
              </p>
              <div className="modal-actions text-center">
                <button
                  type="button"
                  className="btn-archival primary-action"
                  id="startQuizBtn"
                  onClick={handleStart}
                >
                  <span>Let The Hat Decide</span>
                  <span aria-hidden="true">✦</span>
                </button>
              </div>
            </div>
          )}

          {stage === 'quiz' && (
            <div className="hat-stage" id="hatQuizStage">
              <div className="quiz-progress-bar">
                <span className="progress-step-text" id="quizStepText">
                  Question {currentQIndex + 1} of {sortingQuestions.length}
                </span>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    id="quizProgressFill"
                    style={{ width: `${((currentQIndex + 1) / sortingQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="question-container">
                <h4 className="quiz-question-prompt" id="quizQuestionPrompt">
                  {currentQ.prompt}
                </h4>
                <div className="quiz-options-list" id="quizOptionsList">
                  {currentQ.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      className="quiz-opt-btn"
                      onClick={() => handleSelectOption(opt.house)}
                    >
                      <span className="opt-letter">{letters[i]}</span>
                      <span className="opt-text">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {stage === 'result' && (
            <div className="hat-stage" id="hatResultStage">
              <div className="result-crest-box" id="resultCrestBox">
                <span className="result-crest-emoji" id="resultCrestEmoji">
                  {resultProfile.emoji}
                </span>
              </div>
              <span className="result-house-pre">THE SORTING HAT HAS SPOKEN:</span>
              <h3 className="result-house-name" id="resultHouseName">
                {resultProfile.name}
              </h3>
              <p className="result-house-motto" id="resultHouseMotto">
                {resultProfile.motto}
              </p>

              <div className="result-verdict-box">
                <span className="verdict-label">The Hat's Analysis of Your Engineering Spirit:</span>
                <p className="result-verdict-text" id="resultVerdictText">
                  {resultProfile.verdict}
                </p>
              </div>

              <div className="result-actions">
                <button
                  type="button"
                  className="btn-archival primary-action"
                  id="returnToArchivesBtn"
                  onClick={handleReturnToArchives}
                >
                  <span>Return To The Archives</span>
                </button>
                <button
                  type="button"
                  className="btn-text-action"
                  id="retrySortingBtn"
                  onClick={handleRetry}
                >
                  <span>Try Once More</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
