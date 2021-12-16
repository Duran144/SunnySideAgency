'use strict';
const menuBtn = document.querySelector('.mobilebtn');
const navModal = document.querySelector('.navigationlinks');

menuBtn.addEventListener('click', () => {
  navModal.classList.toggle('open');
});