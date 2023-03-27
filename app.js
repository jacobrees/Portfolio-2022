window.scrollTo(0, 0);
const menu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");

menu.addEventListener("click", () => {
  if (mobileNav.style.visibility === "visible") {
    mobileNav.style.visibility = "hidden";
  } else {
    mobileNav.style.visibility = "visible";
  }
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mobileNav.style.visibility = "hidden";
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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
