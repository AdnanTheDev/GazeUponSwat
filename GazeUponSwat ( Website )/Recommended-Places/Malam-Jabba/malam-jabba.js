let menu = document.querySelector('.right-nav');
let menuBtn = document.querySelector('#menu');
let openMenuBtn = document.querySelector('.ri-menu-3-line');
isMenuOpen = false;

openMenuBtn.addEventListener('click', () => {
  if (isMenuOpen === false) {
    menu.style.top = '80px';
    isMenuOpen = true;
  } else {
    menu.style.top = '-1000px';
    isMenuOpen = false;
  }
});

page1.addEventListener('click', () => {
  if (isMenuOpen) {
    isMenuOpen = false;
    menu.style.top = '-1000px';
  }
});