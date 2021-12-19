'use strict';

var menuBtn = document.querySelector('.mobilebtn');
var mobilemenu = document.querySelector('.navigationlinks');
menuBtn.addEventListener('click', function () {
  mobilemenu.classList.toggle('open');
});