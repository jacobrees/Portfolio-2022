gsap.from(".project-fade-right", { scrollTrigger: {trigger: ".project-fade-right"},duration: 1, x: 100, opacity: 0, stagger: 0.2, delay: 0.5 });
gsap.from(".project-fade-left", {  scrollTrigger: {trigger: ".project-fade-left"}, duration: 1, x: -100, opacity: 0, stagger: 0.2, delay: 0.5 });
gsap.from(".project-fade-right2", { scrollTrigger: {trigger: ".project-fade-right2"},duration: 1, x: 100, opacity: 0, stagger: 0.2, delay: 0.5 });
window.scrollTo(0, 0);
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