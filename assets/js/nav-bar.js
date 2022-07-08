const navToggle = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-items");

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-items_visible');

  if (navMenu.classList.contains("nav-items_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
