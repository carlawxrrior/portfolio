const scrollButton = document.getElementById("scrollButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
