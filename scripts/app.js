const navigationDots = document.getElementById("navigation-dots");
const menu = document.getElementById("menu");

navigationDots.addEventListener("click", toggleDisplay);

function toggleDisplay() {
  menu.classList.toggle("show");
}
