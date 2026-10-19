/**
 * Modern Micro-Interactions & UX Animation Engine
 * Muhammad Alfin Prayoga Portfolio
 * 1. Top Reading Scroll Progress Bar
 * 2. Circular Back-To-Top SVG Ring
 * 3. Tactile Card Spotlight Glare on Hover
 * 4. Smooth Button Click Ripple Wave
 * 5. Real-Time Tulungagung WIB Clock
 */

(function () {
  'use strict';

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ===================================================================
     1. SCROLL PROGRESS BAR & CIRCULAR BACK-TO-TOP INDICATOR
     =================================================================== */
  const progressBar = document.getElementById('scroll-progress');
  const scrollCircle = document.getElementById('scroll-circle');
  const backToTopBtn = document.getElementById('back-to-top');
  const circleRadius = 20;
  const circleCircumference = 2 * Math.PI * circleRadius;

  if (scrollCircle) {
    scrollCircle.style.strokeDasharray = `${circleCircumference} ${circleCircumference}`;
    scrollCircle.style.strokeDashoffset = circleCircumference;
  }

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
    const percentClamped = Math.min(Math.max(scrollPercent, 0), 1);

    // Top progress bar width
    if (progressBar) {
      progressBar.style.width = `${percentClamped * 100}%`;
    }

    // Circular ring progress on back-to-top button
    if (scrollCircle) {
      const offset = circleCircumference - (percentClamped * circleCircumference);
      scrollCircle.style.strokeDashoffset = offset;
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollTop > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ===================================================================
     2. CARD SPOTLIGHT GLARE EFFECT (Desktop Fine Pointer Only)
     =================================================================== */
  if (isFinePointer) {
    function initCardSpotlights() {
      const cards = document.querySelectorAll(
        '.flagship-case, .skill-card, .ethos-card, .chronicle-card, .channel-card-editorial, .portrait-plate, .manifesto-card, .project-card, .form-container-plate'
      );

      cards.forEach((card) => {
        if (card.dataset.spotlightInit) return;
        card.dataset.spotlightInit = 'true';

        const computedPos = window.getComputedStyle(card).position;
        if (computedPos === 'static') {
          card.style.position = 'relative';
        }

        let glare = card.querySelector('.card-glare');
        if (!glare) {
          glare = document.createElement('div');
          glare.className = 'card-glare';
          card.appendChild(glare);
        }

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle 260px at ${x}px ${y}px, rgba(255, 255, 255, 0.06), transparent 70%)`;
        });

        card.addEventListener('mouseleave', () => {
          glare.style.opacity = '0';
        });
      });
    }

    document.addEventListener('DOMContentLoaded', initCardSpotlights);
    setTimeout(initCardSpotlights, 350);

    const projectGrid = document.getElementById('projects-grid');
    if (projectGrid) {
      const observer = new MutationObserver(() => setTimeout(initCardSpotlights, 80));
      observer.observe(projectGrid, { childList: true });
    }
  }

  /* ===================================================================
     3. SMOOTH WATER RIPPLE ON BUTTON CLICK
     =================================================================== */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn, .tab-btn, .filter-btn, .theme-toggle-btn, .channel-link, .floating-wa-dock, .channel-card-editorial, .footer-social-link');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';

    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 550);
  });

  /* ===================================================================
     4. REAL-TIME TULUNGAGUNG LIVE CLOCK (WIB / UTC+7)
     =================================================================== */
  const clockElement = document.getElementById('tulungagung-clock');
  function updateTulungagungClock() {
    if (!clockElement) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      clockElement.textContent = `${formatter.format(now)} WIB`;
    } catch (e) {
      // Fallback
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clockElement.textContent = `${hours}:${minutes}:${seconds} WIB`;
    }
  }

  if (clockElement) {
    updateTulungagungClock();
    setInterval(updateTulungagungClock, 1000);
  }

})();
