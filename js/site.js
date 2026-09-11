document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
});

function validateField(field) {
  const wrap = field.closest('.field');
  if (!wrap) return true;
  let valid = field.checkValidity();
  if (field.type === 'email' && field.value) {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
  }
  if (field.hasAttribute('data-phone') && field.value) {
    valid = /^[0-9+()\-\s]{7,}$/.test(field.value);
  }
  wrap.classList.toggle('has-error', !valid);
  return valid;
}

function validateForm(form) {
  let allValid = true;
  form.querySelectorAll('input[required], select[required], textarea[required], input[data-phone]').forEach(field => {
    if (!validateField(field)) allValid = false;
  });
  return allValid;
}

function validateStep(stepEl) {
  let allValid = true;
  stepEl.querySelectorAll('input[required], select[required], textarea[required], input[data-phone]').forEach(field => {
    if (!validateField(field)) allValid = false;
  });
  return allValid;
}

function wireLiveValidation(form) {
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const wrap = field.closest('.field');
      if (wrap && wrap.classList.contains('has-error')) validateField(field);
    });
  });
}
