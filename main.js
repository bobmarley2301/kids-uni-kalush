const menuToggle = document.getElementById('menu-toggle');
    const mobMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobMenu.classList.toggle('hidden');  // Toggle the 'hidden' class to show/hide the mobile menu
        mobMenu.classList.toggle('translate-y-[-100%]'); // Adds smooth sliding animation
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