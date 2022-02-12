const body = document.querySelector('body');
const menu = document.querySelector('.menu-bars');

menu.addEventListener('click', () => {
  body.classList.add('menu');
});

const closeMenu = body.querySelector('.close-icon');
closeMenu.addEventListener('click', () => {
  body.classList.remove('menu');
});
