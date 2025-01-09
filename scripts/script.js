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

// Objeto para almacenar los índices de cada carrusel
let carouselIndices = {
  "carousel-kirby": 0,
  "carousel-lollipop": 0,
  "carousel-zodiac": 0,
};

function moveSlide(carouselId, step) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll(".carousel-item");
  const carouselContainer = carousel.querySelector(".carousel-container");

  // Actualiza el índice del carrusel específico
  carouselIndices[carouselId] += step;

  // Asegura que el índice esté dentro de los límites
  if (carouselIndices[carouselId] < 0) {
    carouselIndices[carouselId] = slides.length - 1;
  } else if (carouselIndices[carouselId] >= slides.length) {
    carouselIndices[carouselId] = 0;
  }

  // Mueve el carrusel según el índice actualizado
  const newTransform = `translateX(-${carouselIndices[carouselId] * 100}%)`;
  carouselContainer.style.transition = "transform 0.5s ease-in-out"; // Añadimos transición suave
  carouselContainer.style.transform = newTransform;
}
