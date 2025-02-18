// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav ul');
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '&#9776;';
  document.querySelector('header .container').appendChild(menuToggle);

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});