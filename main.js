const menuToggle = document.getElementsById('menu-toggle');
const mobMenu = document.getElementsById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobMenu.classList.toggle('hidden');
});

const nav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};