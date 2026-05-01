// ── Copyright year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Form validation and submit ──
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');

function validate() {
  let valid = true;

  const name    = document.getElementById('name');
  const email   = document.getElementById('email');
  const message = document.getElementById('message');

  // Name
  if (!name.value.trim()) {
    name.classList.add('error');
    document.getElementById('nameError').classList.add('visible');
    valid = false;
  } else {
    name.classList.remove('error');
    document.getElementById('nameError').classList.remove('visible');
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('error');
    document.getElementById('emailError').classList.add('visible');
    valid = false;
  } else {
    email.classList.remove('error');
    document.getElementById('emailError').classList.remove('visible');
  }

  // Message
  if (!message.value.trim()) {
    message.classList.add('error');
    document.getElementById('messageError').classList.add('visible');
    valid = false;
  } else {
    message.classList.remove('error');
    document.getElementById('messageError').classList.remove('visible');
  }

  return valid;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) return;

  // Show sending state
  submitBtn.textContent = 'Sending...';
  submitBtn.classList.add('sending');

  // NOTE: This form does not send emails on its own.
  // To make it functional, connect it to a service like Formspree, EmailJS, or your own backend.
  // For now it simulates a send after 1.2s and shows the success message.
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = 'Send Message →';
    submitBtn.classList.remove('sending');
    successMsg.classList.add('visible');
  }, 1200);
});

// Clear error state on input
['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById(id).classList.remove('error');
    document.getElementById(id + 'Error').classList.remove('visible');
  });
});