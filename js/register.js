/**
 * INNOVEX ’26 - Registration Form Validation & Pass Generator
 * PCCCS382 · IT Workshop · IEM
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  const fields = {
    fullName: document.getElementById('fullName'),
    rollNo: document.getElementById('rollNo'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    department: document.getElementById('department'),
    eventSelect: document.getElementById('eventSelect')
  };

  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const genderError = document.getElementById('genderError');

  // Input event listeners for real-time validation
  if (fields.fullName) {
    fields.fullName.addEventListener('input', () => validateName(fields.fullName));
  }
  if (fields.rollNo) {
    fields.rollNo.addEventListener('input', () => validateRoll(fields.rollNo));
  }
  if (fields.email) {
    fields.email.addEventListener('input', () => validateEmail(fields.email));
  }
  if (fields.phone) {
    fields.phone.addEventListener('input', () => validatePhone(fields.phone));
  }
  if (fields.department) {
    fields.department.addEventListener('change', () => validateDepartment(fields.department));
  }
  if (fields.eventSelect) {
    fields.eventSelect.addEventListener('change', () => validateEvent(fields.eventSelect));
  }

  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (genderError) genderError.textContent = '';
    });
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName(fields.fullName);
    const isRollValid = validateRoll(fields.rollNo);
    const isEmailValid = validateEmail(fields.email);
    const isPhoneValid = validatePhone(fields.phone);
    const isDeptValid = validateDepartment(fields.department);
    const isEventValid = validateEvent(fields.eventSelect);
    const isGenderValid = validateGender(genderRadios, genderError);

    const isAllValid = isNameValid && isRollValid && isEmailValid && isPhoneValid && isDeptValid && isEventValid && isGenderValid;

    if (!isAllValid) {
      if (typeof showToast === 'function') {
        showToast('Please fix the errors in the registration form before submitting.', 'error');
      }
      return;
    }

    // Selected gender value
    let selectedGender = '';
    genderRadios.forEach(r => {
      if (r.checked) selectedGender = r.value;
    });

    // Generate unique Ticket ID
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const ticketId = `INX26-${randomHex}`;

    // Registration data object
    const regData = {
      ticketId,
      name: fields.fullName.value.trim(),
      rollNo: fields.rollNo.value.trim().toUpperCase(),
      email: fields.email.value.trim().toLowerCase(),
      phone: fields.phone.value.trim(),
      department: fields.department.value,
      gender: selectedGender,
      event: fields.eventSelect.options[fields.eventSelect.selectedIndex].text,
      registeredAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    // Save to localStorage
    try {
      localStorage.setItem('innovex_registration', JSON.stringify(regData));
    } catch (err) {
      console.warn('Storage unavailable', err);
    }

    // Display confirmation modal with pass
    showTicketModal(regData);
    form.reset();
    clearValidationStyles();
  });

  // Modal setup
  setupModalEvents();
});

// Validation functions
function validateName(input) {
  const val = input.value.trim();
  const errorEl = document.getElementById('nameError');
  const nameRegex = /^[A-Za-z\s.]{3,50}$/;

  if (!val) {
    setInvalid(input, errorEl, 'Participant full name is required');
    return false;
  }
  if (!nameRegex.test(val)) {
    setInvalid(input, errorEl, 'Please enter a valid full name (letters only, min 3 chars)');
    return false;
  }
  setValid(input, errorEl);
  return true;
}

function validateRoll(input) {
  const val = input.value.trim();
  const errorEl = document.getElementById('rollError');
  const rollRegex = /^[A-Za-z0-9\/-]{4,20}$/;

  if (!val) {
    setInvalid(input, errorEl, 'University / College Roll No. is required');
    return false;
  }
  if (!rollRegex.test(val)) {
    setInvalid(input, errorEl, 'Please enter a valid Roll No. (min 4 characters)');
    return false;
  }
  setValid(input, errorEl);
  return true;
}

function validateEmail(input) {
  const val = input.value.trim();
  const errorEl = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!val) {
    setInvalid(input, errorEl, 'Official email address is required');
    return false;
  }
  if (!emailRegex.test(val)) {
    setInvalid(input, errorEl, 'Please enter a valid email address (e.g., student@iemcal.com)');
    return false;
  }
  setValid(input, errorEl);
  return true;
}

function validatePhone(input) {
  const val = input.value.trim();
  const errorEl = document.getElementById('phoneError');
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!val) {
    setInvalid(input, errorEl, 'Contact phone number is required');
    return false;
  }
  if (!phoneRegex.test(val)) {
    setInvalid(input, errorEl, 'Enter a valid 10-digit Indian phone number starting with 6-9');
    return false;
  }
  setValid(input, errorEl);
  return true;
}

function validateDepartment(select) {
  const val = select.value;
  const errorEl = document.getElementById('deptError');

  if (!val || val === '') {
    setInvalid(select, errorEl, 'Please select your department');
    return false;
  }
  setValid(select, errorEl);
  return true;
}

function validateEvent(select) {
  const val = select.value;
  const errorEl = document.getElementById('eventError');

  if (!val || val === '') {
    setInvalid(select, errorEl, 'Please select the event you wish to register for');
    return false;
  }
  setValid(select, errorEl);
  return true;
}

function validateGender(radios, errorEl) {
  let isChecked = false;
  radios.forEach(r => {
    if (r.checked) isChecked = true;
  });

  if (!isChecked) {
    if (errorEl) errorEl.textContent = 'Please select your gender';
    return false;
  }
  if (errorEl) errorEl.textContent = '';
  return true;
}

function setInvalid(input, errorEl, message) {
  input.classList.add('input-invalid');
  input.classList.remove('input-valid');
  if (errorEl) errorEl.textContent = message;
}

function setValid(input, errorEl) {
  input.classList.remove('input-invalid');
  input.classList.add('input-valid');
  if (errorEl) errorEl.textContent = '';
}

function clearValidationStyles() {
  document.querySelectorAll('.form-input, .form-select').forEach(el => {
    el.classList.remove('input-valid', 'input-invalid');
  });
  document.querySelectorAll('.field-error').forEach(el => {
    el.textContent = '';
  });
}

function showTicketModal(data) {
  const modal = document.getElementById('ticketModal');
  if (!modal) return;

  document.getElementById('passTicketId').textContent = data.ticketId;
  document.getElementById('passName').textContent = data.name;
  document.getElementById('passRoll').textContent = data.rollNo;
  document.getElementById('passDept').textContent = data.department;
  document.getElementById('passGender').textContent = data.gender;
  document.getElementById('passEvent').textContent = data.event;
  document.getElementById('passEmail').textContent = data.email;
  document.getElementById('passPhone').textContent = data.phone;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (typeof showToast === 'function') {
    showToast('Registration successful! Your pass has been generated.', 'success');
  }
}

function setupModalEvents() {
  const modal = document.getElementById('ticketModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const copyBtn = document.getElementById('copyTicketBtn');
  const printBtn = document.getElementById('printTicketBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const ticketId = document.getElementById('passTicketId').textContent;
      navigator.clipboard.writeText(ticketId).then(() => {
        if (typeof showToast === 'function') {
          showToast(`Copied Ticket ID: ${ticketId}`, 'success');
        }
      }).catch(() => {
        alert(`Ticket ID: ${ticketId}`);
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
