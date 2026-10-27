/**
 * INNOVEX ’26 - Feedback & Contact Handler
 * PCCCS382 · IT Workshop · IEM
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const categorySelect = document.getElementById('contactCategory');
  const messageInput = document.getElementById('contactMessage');
  const statusBox = document.getElementById('contactStatusBox');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showFieldError('nameError', 'Please enter your name');
      nameInput.classList.add('input-invalid');
      isValid = false;
    } else {
      clearFieldError('nameError');
      nameInput.classList.remove('input-invalid');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showFieldError('emailError', 'Please enter a valid email address');
      emailInput.classList.add('input-invalid');
      isValid = false;
    } else {
      clearFieldError('emailError');
      emailInput.classList.remove('input-invalid');
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showFieldError('subjectError', 'Please enter a subject');
      subjectInput.classList.add('input-invalid');
      isValid = false;
    } else {
      clearFieldError('subjectError');
      subjectInput.classList.remove('input-invalid');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError('messageError', 'Message should be at least 10 characters long');
      messageInput.classList.add('input-invalid');
      isValid = false;
    } else {
      clearFieldError('messageError');
      messageInput.classList.remove('input-invalid');
    }

    if (!isValid) return;

    // Success response
    const name = nameInput.value.trim();
    if (statusBox) {
      statusBox.style.display = 'block';
      statusBox.innerHTML = `
        <div style="padding: 16px; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 8px; color: #a7f3d0;">
          <strong>Thank you, ${name}!</strong> Your feedback/inquiry has been received by the IEM Organizing Team. We will get back to you shortly at ${emailInput.value.trim()}.
        </div>
      `;
    }

    if (typeof showToast === 'function') {
      showToast('Feedback submitted successfully! Thank you.', 'success');
    }

    form.reset();
  });

  function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearFieldError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  }
});
