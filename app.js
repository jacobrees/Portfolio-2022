/* eslint-disable */
gsap.from('.navbar', {duration: 1, y: '-100%', ease: 'bounce.out'});
gsap.from('.home-text', {duration: 1, y: -50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});
gsap.from('.my-photo', {duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});
gsap.from('.about-me-section', {duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});
gsap.from('.showcase-title', {scrollTrigger: '.showcase-title', duration: 1, x: -50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});;
gsap.from('.project-fade-right', {scrollTrigger: '.project-fade-right', duration: 1, x: -50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});
gsap.from('.project-fade-left', {scrollTrigger: '.project-fade-left', duration: 1, x: 50, opacity: 0, delay: 0.5, ease: 'power4.out', stagger: 0.3});
/* eslint-enable */

const menu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-navbar');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');

menu.addEventListener('click', () => {
  if (mobileNav.style.visibility === 'visible') {
    mobileNav.style.visibility = 'hidden';
  } else {
    mobileNav.style.visibility = 'visible';
  }
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileNav.style.visibility = 'hidden';
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