import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem(storageKey, JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const storedState = localStorage.getItem(storageKey);

  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(formState);

  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', loadFormState);

form.addEventListener('submit', handleSubmit);

