window.scrollTo(0, 0);
const menu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle('open');
  mobileNav.classList.toggle("show");
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menu.classList.toggle('open');
    mobileNav.classList.toggle("show");
  });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.textContent;
    const section = document.getElementById(id);
    const position = section.offsetTop - 70;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

particlesJS.load("particles-js", "assets/particlesjs-config.json", () => {
  // eslint-disable-line
});
