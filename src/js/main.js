const btn = document.querySelector(".btn-coffee");
const icon = document.querySelector(".btn-close");
const openCloseNav = document.getElementById("top-nav");

btn.addEventListener("click", () => {
  openCloseNav.style.height = "100vh";
});

icon.addEventListener("click", () => {
  openCloseNav.style.height = "0vh";
});
