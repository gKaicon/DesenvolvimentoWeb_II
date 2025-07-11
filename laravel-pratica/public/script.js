// script.js

const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});