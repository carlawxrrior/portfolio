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

document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".logo-container");
  const mainNav = document.querySelector(".main-nav");
  const scrollBtn = document.querySelector(".scroll-btn");
  const sections = document.querySelectorAll(".section");
  const landing = document.getElementById("landing");
  const topBar = document.querySelector(".top-bar");

  // Mostrar la top bar cuando se haga scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      topBar.classList.add("show");
      landing.classList.add("hide"); // Ocultar la landing
    } else {
      topBar.classList.remove("show");
      landing.classList.remove("hide"); // Mostrar la landing
    }
  });

  // Función para el desplazamiento suave al hacer clic en el menú
  document.querySelectorAll(".main-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

const toggleButton = document.getElementById("toggle-mode");

const currentMode = localStorage.getItem("mode") || "day";

if (currentMode === "night") {
  document.body.classList.add("night-mode");
  toggleButton.classList.add("night-mode");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
  toggleButton.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("mode", "night");
  } else {
    localStorage.setItem("mode", "day");
  }
});
