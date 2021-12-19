'use strict';
const menuBtn = document.querySelector('.mobilebtn');
const mobilemenu = document.querySelector('.navigationlinks');

menuBtn.addEventListener('click', () => {
  mobilemenu.classList.toggle('open');
});