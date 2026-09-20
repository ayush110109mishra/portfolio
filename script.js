/**
 * ============================================================================
 * AYUSH MISHRA — THE HOGWARTS ARCHIVES
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. NAVIGATION SCROLL SPY & STICKY HEADER
  // --------------------------------------------------------------------------
  const archiveNav = document.getElementById('archiveNav');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header background elevation on scroll
    if (scrollY > 30) {
      archiveNav.classList.add('scrolled');
    } else {
      archiveNav.classList.remove('scrolled');
    }

    // Scroll spy: identify currently visible section
    const navOffset = 120;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navOffset;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load

  // Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    // Close on link click
    drawerLinks.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Close on outside tap
    document.addEventListener('click', (e) => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeDrawer();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. PROJECT DOSSIERS: CATEGORY FILTERING & EXPANSION
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.archive-filter-bar .filter-btn');
  const dossierCards = document.querySelectorAll('.dossier-card');

  // Category Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      dossierCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Expand / Collapse Dossier Files
  const dossierToggles = document.querySelectorAll('.btn-dossier-toggle');
  dossierToggles.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.dossier-card');
      const expandedSheet = card.querySelector('.dossier-expanded-content');
      const toggleText = toggleBtn.querySelector('.toggle-text');
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Close
        toggleBtn.setAttribute('aria-expanded', 'false');
        expandedSheet.hidden = true;
        toggleText.textContent = 'Inspect Archival File';
      } else {
        // Open
        toggleBtn.setAttribute('aria-expanded', 'true');
        expandedSheet.hidden = false;
        toggleText.textContent = 'Close Archival File';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. THE OBSERVER: PHOTOGRAPHY LIGHTBOX
  // --------------------------------------------------------------------------
  const photoLightboxModal = document.getElementById('photoLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const photoFrameCards = document.querySelectorAll('.photo-frame-card');

  function openLightbox(photoCard) {
    const src = photoCard.getAttribute('data-photo-src');
    const cat = photoCard.getAttribute('data-photo-cat');
    const title = photoCard.getAttribute('data-photo-title');
    const desc = photoCard.getAttribute('data-photo-desc');

    lightboxImg.src = src;
    lightboxImg.alt = `${cat} - ${title}`;
    lightboxCat.textContent = cat;
    lightboxTitle.textContent = `“${title}”`;
    lightboxDesc.textContent = desc;

    photoLightboxModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    photoLightboxModal.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  photoFrameCards.forEach((card) => {
    card.addEventListener('click', () => openLightbox(card));
  });

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (photoLightboxModal) {
    photoLightboxModal.addEventListener('click', (e) => {
      if (e.target === photoLightboxModal) {
        closeLightbox();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. THE SORTING HAT INTERACTIVE CEREMONY (EASTER EGG)
  // --------------------------------------------------------------------------
  const sortingHatModal = document.getElementById('sortingHatModal');
  const openSortingHatBtn = document.getElementById('openSortingHatBtn');
  const openSortingHatMobileBtn = document.getElementById('openSortingHatMobileBtn');
  const closeSortingHatBtn = document.getElementById('closeSortingHatBtn');

  // Hat stages
  const hatIntroStage = document.getElementById('hatIntroStage');
  const hatQuizStage = document.getElementById('hatQuizStage');
  const hatResultStage = document.getElementById('hatResultStage');

  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizStepText = document.getElementById('quizStepText');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizQuestionPrompt = document.getElementById('quizQuestionPrompt');
  const quizOptionsList = document.getElementById('quizOptionsList');

  // Result Elements
  const resultCrestEmoji = document.getElementById('resultCrestEmoji');
  const resultHouseName = document.getElementById('resultHouseName');
  const resultHouseMotto = document.getElementById('resultHouseMotto');
  const resultVerdictText = document.getElementById('resultVerdictText');
  const returnToArchivesBtn = document.getElementById('returnToArchivesBtn');
  const retrySortingBtn = document.getElementById('retrySortingBtn');

  // Quiz Questions Data (Hogwarts engineering & character themed)
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

  // House Profiles
  const houseProfiles = {
    Ravenclaw: {
      emoji: '🦅',
      name: 'RAVENCLAW',
      motto: '“Wit beyond measure is man’s greatest treasure.”',
      verdict:
        'Your analytical nature seeks deep understanding before execution. Like an engineer running kinematics simulations in Omniverse, you dissect complex systems into mathematical clarity. The archives welcome your brilliant intellect.'
    },
    Gryffindor: {
      emoji: '🦁',
      name: 'GRYFFINDOR',
      motto: '“Where dwell the brave at heart, their daring nerve and chivalry set them apart.”',
      verdict:
        'You build with bold initiative and fearlessness. When code fails or mechanical tolerances bend, you tackle the workshop challenge head-on. Your daring spirit drives groundbreaking engineering innovations.'
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

  let currentQuestionIdx = 0;
  let houseScores = { Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 };

  function openSortingHat() {
    sortingHatModal.hidden = false;
    document.body.style.overflow = 'hidden';
    resetSortingState();
  }

  function closeSortingHat() {
    sortingHatModal.hidden = true;
    document.body.style.overflow = '';
  }

  function resetSortingState() {
    currentQuestionIdx = 0;
    houseScores = { Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 };
    hatIntroStage.hidden = false;
    hatQuizStage.hidden = true;
    hatResultStage.hidden = true;
  }

  function renderQuestion(index) {
    const qData = sortingQuestions[index];
    quizStepText.textContent = `Question ${index + 1} of ${sortingQuestions.length}`;
    quizProgressFill.style.width = `${((index + 1) / sortingQuestions.length) * 100}%`;
    quizQuestionPrompt.textContent = qData.prompt;

    quizOptionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    qData.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `
        <span class="opt-letter">${letters[i]}</span>
        <span class="opt-text">${opt.text}</span>
      `;
      btn.addEventListener('click', () => handleOptionSelected(opt.house));
      quizOptionsList.appendChild(btn);
    });
  }

  function handleOptionSelected(house) {
    houseScores[house] = (houseScores[house] || 0) + 1;
    currentQuestionIdx++;

    if (currentQuestionIdx < sortingQuestions.length) {
      renderQuestion(currentQuestionIdx);
    } else {
      revealHouseResult();
    }
  }

  function revealHouseResult() {
    hatQuizStage.hidden = true;
    hatResultStage.hidden = false;

    // Find highest scoring house
    let winningHouse = 'Ravenclaw';
    let maxScore = -1;

    for (const [house, score] of Object.entries(houseScores)) {
      if (score > maxScore) {
        maxScore = score;
        winningHouse = house;
      }
    }

    const profile = houseProfiles[winningHouse] || houseProfiles.Ravenclaw;
    resultCrestEmoji.textContent = profile.emoji;
    resultHouseName.textContent = profile.name;
    resultHouseMotto.textContent = profile.motto;
    resultVerdictText.textContent = profile.verdict;
  }

  if (openSortingHatBtn) openSortingHatBtn.addEventListener('click', openSortingHat);
  if (openSortingHatMobileBtn) {
    openSortingHatMobileBtn.addEventListener('click', () => {
      closeDrawer();
      openSortingHat();
    });
  }
  if (closeSortingHatBtn) closeSortingHatBtn.addEventListener('click', closeSortingHat);

  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
      hatIntroStage.hidden = true;
      hatQuizStage.hidden = false;
      renderQuestion(0);
    });
  }

  if (retrySortingBtn) {
    retrySortingBtn.addEventListener('click', () => {
      resetSortingState();
      hatIntroStage.hidden = true;
      hatQuizStage.hidden = false;
      renderQuestion(0);
    });
  }

  if (returnToArchivesBtn) {
    returnToArchivesBtn.addEventListener('click', () => {
      closeSortingHat();
      const recordSection = document.getElementById('record');
      if (recordSection) {
        recordSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (sortingHatModal) {
    sortingHatModal.addEventListener('click', (e) => {
      if (e.target === sortingHatModal) {
        closeSortingHat();
      }
    });
  }

  // Global Escape key dismiss for both modals & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (sortingHatModal && !sortingHatModal.hidden) closeSortingHat();
      if (photoLightboxModal && !photoLightboxModal.hidden) closeLightbox();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // 6. OWL POST CONTACT DISPATCH FORM
  // --------------------------------------------------------------------------
  const owlPostForm = document.getElementById('owlPostForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('dispatchSubject');
  const messageInput = document.getElementById('dispatchMessage');
  const formFeedback = document.getElementById('formFeedback');
  const dispatchSubmitBtn = document.getElementById('dispatchSubmitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (owlPostForm) {
    owlPostForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset error messages
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';
      formFeedback.hidden = true;
      formFeedback.className = 'form-feedback';

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please inscribe your name or title.';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please provide an owl return address.';
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid address format (e.g. name@domain.com).';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please state the topic of your dispatch.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'The parchment cannot be dispatched empty.';
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Please write at least a sentence on your parchment.';
        isValid = false;
      }

      if (!isValid) return;

      // Simulated Dispatch Delivery with Archival Feedback
      dispatchSubmitBtn.disabled = true;
      const originalBtnHtml = dispatchSubmitBtn.innerHTML;
      dispatchSubmitBtn.innerHTML = `
        <span class="btn-dispatch-icon">🦉</span>
        <span class="btn-dispatch-text">Dispatching Barn Owl...</span>
      `;

      setTimeout(() => {
        dispatchSubmitBtn.disabled = false;
        dispatchSubmitBtn.innerHTML = originalBtnHtml;

        formFeedback.hidden = false;
        formFeedback.classList.add('success');
        formFeedback.innerHTML = `
          <strong>✦ Dispatch Sealed & Delivered!</strong><br>
          Your parchment has been entrusted to a swift barn owl. Ayush will receive your message in the archives shortly.
        `;

        owlPostForm.reset();
      }, 900);
    });
  }

});
