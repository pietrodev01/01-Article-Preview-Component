const button = document.querySelector(".show");
const activeBox = document.querySelector(".active");
const closeBtn = document.querySelector(".share-active");

button.addEventListener("click", (e) => {
  e.preventDefault();
  activeBox.classList.toggle("visible");
});

closeBtn.addEventListener("click", (e) => {
  activeBox.classList.remove("visible");
});
