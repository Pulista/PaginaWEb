const indicator = document.querySelector(".indicator");
const btnTop = document.querySelector("#btnTop");

// Criar um observador de interseção para monitorar os elementos na janela
const observer = new IntersectionObserver((entries) => {
  // Para cada entrada, verificar se está intersectando ou não
  for (const entry of entries) {
    // Se o elemento é o indicator, atualizar sua posição
    if (entry.target === indicator) {
      const { scrollHeight } = document.body;
      const { innerWidth } = window;
      const left = (window.pageYOffset / scrollHeight) * innerWidth;
      indicator.style.transform = `translateX(${left}px)`;
    }
    // Se o elemento é o btnTop, atualizar seu estilo de exibição
    if (entry.target === btnTop) {
      if (entry.isIntersecting) {
        btnTop.style.display = "none";
      } else {
        btnTop.style.display = "block";
      }
    }
  }
});

// Observar os elementos na janela
observer.observe(indicator);
observer.observe(btnTop);

function scrollToElement(elementId) {
  const element = document.querySelector(`#${elementId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
