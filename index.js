const toggleButton = document.querySelector(".toggle-btn");
const toggleButtonLine = document.querySelectorAll(".toggle-btn__line");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();

  toggleButtonLine[0].classList.toggle("toggle-btn__line-1");
  toggleButtonLine[1].classList.toggle("toggle-btn__line-2");
  toggleButtonLine[2].classList.toggle("toggle-btn__line-3");
});
