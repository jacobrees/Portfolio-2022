const menu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-navbar');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');
const loader = document.querySelector('.loading-screen');
const loadingText = document.querySelector('.loading-title');

loadingText.style.visibility = 'visible';

const myText = new SplitType('#loading-text');// eslint-disable-line

gsap.to('.char', {// eslint-disable-line
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 1200);
});

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  mobileNav.classList.toggle('show');
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    menu.classList.toggle('open');
    mobileNav.classList.toggle('show');
  });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    const id = navLink.textContent;
    const section = document.getElementById(id);
    const position = section.offsetTop - 70;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  });
});

particlesJS.load('particles-js', 'assets/particlesjs-config.json', () => {// eslint-disable-line
});
