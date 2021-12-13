"use strict";

var btn = document.querySelector('.mobile-navbar');
var modal = document.querySelector('.links');
btn.addEventListener('click', function () {
  modal.classList.toggle('open');
});