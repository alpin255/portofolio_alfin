/**
 * Typing Effect for Hero Subtitle
 * Cycles through multiple professional roles with typewriter animation
 */
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Software & Web Developer',
    'Laravel & Vue.js 3 Developer',
    'Java Application Developer',
    'Informatics Student @ Universitas Bhinneka PGRI',
    'Fullstack Solution Builder'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let pauseDelay = 2200;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = pauseDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 800);
});
