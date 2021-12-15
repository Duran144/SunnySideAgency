'use strict';

var menuBtn = document.querySelector('.menubtn');
var navModal = document.querySelector('.navLinks');
menuBtn.addEventListener('click', function () {
  navModal.classList.toggle('open');
});