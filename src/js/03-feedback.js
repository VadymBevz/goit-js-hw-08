import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveStateToLocalStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

const setStateFromLocalStorage = () => {
  const state = localStorage.getItem('feedback-form-state');
  if (state) {
    const { email, message } = JSON.parse(state);
    emailInput.value = email;
    messageInput.value = message;
  }
};

form.addEventListener('input', saveStateToLocalStorage);
window.addEventListener('load', setStateFromLocalStorage);
form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(state);
});
