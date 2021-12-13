const btn = document.querySelector('.mobile-navbar');
const modal = document.querySelector('.links');

btn.addEventListener('click', () => {
  modal.classList.toggle('open');
});