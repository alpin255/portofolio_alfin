/**
 * Main Application Logic
 * Muhammad Alfin Prayoga Portfolio
 * Navigation, Theme Toggle, Scroll Animations & Interactive Counters
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('theme-toggle');
  const backToTopBtn = document.getElementById('back-to-top');

  // ===================================================================
  // 1. THEME TOGGLE (Dark / Light Mode)
  // ===================================================================
  const savedTheme = localStorage.getItem('alfin-portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('alfin-portfolio-theme', nextTheme);
      if (window.showToast) {
        window.showToast(`Beralih ke mode ${nextTheme === 'dark' ? 'gelap 🌙' : 'terang ☀️'}`);
      }
    });
  }

  // ===================================================================
  // 2. STICKY NAVBAR & BACK TO TOP
  // ===================================================================
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky navbar effect
    if (scrollPos > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollPos > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===================================================================
  // 3. MOBILE MENU & BACKDROP
  // ===================================================================
  function toggleMobileMenu() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    navBackdrop.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ===================================================================
  // 4. ACTIVE SECTION HIGHLIGHTING (ScrollSpy)
  // ===================================================================
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => sectionObserver.observe(sec));

  // ===================================================================
  // 5. REVEAL ANIMATIONS ON SCROLL
  // ===================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===================================================================
  // 6. STATS COUNTER ANIMATION
  // ===================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('about');
  if (statsSection) statsObserver.observe(statsSection);

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 40));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = current + suffix;
        }
      }, 35);
    });
  }

  // ===================================================================
  // 7. SKILL CATEGORY TABS & PROGRESS BARS
  // ===================================================================
  const skillTabs = document.querySelectorAll('.skills-tabs .tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      skillCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Animate skill progress bars on scroll
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        });
      }
    });
  }, { threshold: 0.2 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) skillsObserver.observe(skillsSection);
});
