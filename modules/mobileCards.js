function initCarousel() {
  const carouselElement = document.querySelector(".carousel");
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 30000, // Cambiar cada 30 segundos
    });
  } else {
    console.error("Elemento del carrusel no encontrado");
  }
}

export { initCarousel };
