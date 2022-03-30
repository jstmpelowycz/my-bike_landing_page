'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-on');
  } else {
    document.body.classList.remove('page__body--menu-on');
  }
});

const button = document.querySelector('.button--submit');
const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  button.animate([
    {
      background: '#fff', transform: 'scale(1)',
    },
    {
      background: '#9d9d9d', transform: 'scale(0.95)',
    },
    {
      background: '#fff', transform: 'scale(1)',
    }],
  { duration: 300 });
  event.preventDefault();
  form.reset();
});
