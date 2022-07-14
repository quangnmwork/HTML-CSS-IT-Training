const toggleButton = document.querySelector(".toggle-btn");
const toggleButtonLine = document.querySelectorAll(".toggle-btn__line");
const navbar = document.querySelector(".navbar-area");
const navBarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();

  toggleButtonLine[0].classList.toggle("toggle-btn__line-1");
  toggleButtonLine[1].classList.toggle("toggle-btn__line-2");
  toggleButtonLine[2].classList.toggle("toggle-btn__line-3");
  navBarMenu.classList.toggle("show");
});
window.addEventListener("scroll", function (event) {
  let top = this.scrollY;

  if (top > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
