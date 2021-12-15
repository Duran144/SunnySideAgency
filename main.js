'use strict';
const menuBtn = document.querySelector('.menubtn');
const navModal = document.querySelector('.navLinks');

menuBtn.addEventListener('click', () => {
  navModal.classList.toggle('open');
});