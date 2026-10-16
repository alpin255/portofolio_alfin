/**
 * Contact Form & Direct WhatsApp Integration
 * Client-side validation, direct WhatsApp chat generator, and toast feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');
  const btnWhatsApp = document.getElementById('btn-wa-direct');

  // WhatsApp Direct Click
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = '6281234567890'; // User can customize this number
      const message = encodeURIComponent(
        'Halo Muhammad Alfin Prayoga! Saya tertarik dengan portofolio Anda dan ingin berdiskusi mengenai proyek kolaborasi / tawaran kerja sama web development.'
      );
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
  }

  // Toast Function
  window.showToast = function(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `${icon} <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // Form Validation and Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Mohon masukkan nama lengkap Anda.');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Mohon masukkan alamat email yang valid.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'Mohon tentukan subjek pesan.');
        isValid = false;
      } else {
        clearError(subjectInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'Pesan minimal terdiri dari 10 karakter.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (!isValid) return;

      // Loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Mengirim Pesan...`;

      // Simulating seamless response / ready to integrate with FormSubmit or mailto
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        showToast('Pesan Anda berhasil dikirim! Alfin akan segera merespons via email.', 'success');
        contactForm.reset();
      }, 1200);
    });
  }

  function showError(input, message) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    const errText = group.querySelector('.form-error');
    if (errText) errText.textContent = message;
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.remove('has-error');
  }

  // Real-time input clearing on type
  ['form-name', 'form-email', 'form-subject', 'form-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => clearError(el));
    }
  });
});
