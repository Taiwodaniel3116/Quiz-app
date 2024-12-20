 //  HAMBURGER MENU

 export function hamburger() {
  const hamburgerMenu = document.querySelector('.js-ham-menu');
  const navContainer = document.querySelector('.js-nav-container');
 
  hamburgerMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
 });
 } 
 hamburger();
