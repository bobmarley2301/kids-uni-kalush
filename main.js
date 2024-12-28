// Мобільне меню
const menuToggle = document.getElementById('menu-toggle');  // Використовуємо getElementById замість getElementsById
const mobMenu = document.getElementById('mobile-menu');     // Використовуємо getElementById

menuToggle.addEventListener('click', () => {
  mobMenu.classList.toggle('hidden');  // Додаємо/видаляємо клас 'hidden' для показу/приховування меню
});


// const myNav = document.getElementById('nav');
// window.onscroll = function () { 
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = !content.classList.contains('hidden');

    // Close all accordions
    document.querySelectorAll('#faq .p-4 + div').forEach((div) => div.classList.add('hidden'));
    document.querySelectorAll('#faq .accordion-icon').forEach((icon) => icon.textContent = '+');
    // Toggle current accordion
    if (!isOpen) {
        content.classList.remove('hidden');
        button.querySelector('.accordion-icon').textContent = '-';
    }
}