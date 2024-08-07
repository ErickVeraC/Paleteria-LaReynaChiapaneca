function initCarousel() {
  const carouselElement = document.querySelector("#carouselExampleIndicators");
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Cambiar cada 3 segundos
      ride: "carousel", // Para que comience automáticamente
    });
  } else {
    console.error("Elemento del carrusel no encontrado");
  }
}

export { initCarousel };
