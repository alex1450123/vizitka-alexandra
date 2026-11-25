const form = document.querySelector('#booking-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Спасибо! Мы свяжемся с вами для подтверждения записи.';
  form.reset();
});
