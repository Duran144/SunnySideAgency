'use strict';

var menuBtn = document.querySelector('.mobilebtn');
var navModal = document.querySelector('.navigationlinks');
menuBtn.addEventListener('click', function () {
  navModal.classList.toggle('open');
});