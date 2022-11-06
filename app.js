const menu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-navbar')
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links')

menu.addEventListener('click',()=>{
    if (mobileNav.style.visibility === "visible"){
        mobileNav.style.visibility = "hidden"
    }else {
        mobileNav.style.visibility = "visible"
    }
})

mobileNavLinks.forEach((navLink) =>{
    navLink.addEventListener('click', ()=>{
        mobileNav.style.visibility = "hidden"
    })
})