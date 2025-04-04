const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  console.log("Click")
  hamburger.classList.toggle("close");
  nav.classList.toggle("open");
});
