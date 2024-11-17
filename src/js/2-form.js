`use strict`
const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

function initializeForm() {
  const savedData = localStorage.getItem(LOCAL_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form Data:', formData);
  localStorage.removeItem(LOCAL_KEY);
  formData = { email: '', message: '' };
  form.reset();
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

initializeForm();
