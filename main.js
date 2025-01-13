const menuToggle = document.getElementById("menu-toggle");
const mobMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  // Перевірка і зміна висоти мобільного меню
  if (mobMenu.style.maxHeight) {
    // Якщо меню відкрите, закриваємо його
    mobMenu.style.maxHeight = null;
  } else {
    // Відкриваємо меню, додаючи максимальну висоту
    mobMenu.style.maxHeight = mobMenu.scrollHeight + "px";
  }
});



// Функція для акордеона (відкриття/закриття елементів)
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = !content.classList.contains("hidden");

  // Закриваємо всі акордеони
  document
    .querySelectorAll("#faq .p-4 + div")
    .forEach((div) => div.classList.add("hidden"));
  document
    .querySelectorAll("#faq .accordion-icon")
    .forEach((icon) => (icon.textContent = "+"));

  // Перемикаємо поточний акордеон
  if (!isOpen) {
    content.classList.remove("hidden");
    button.querySelector(".accordion-icon").textContent = "-";
  }
}

// Скролл для зміни класів навігації (якщо це потрібно)
// const myNav = document.getElementById('nav');
// window.onscroll = function () {
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };
