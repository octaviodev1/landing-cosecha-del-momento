// Funcion que hace que las anclas tengan un deslizamiento mas suave
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".anchor").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerHeight = 100; // Ajusta esta altura según la altura de tu encabezado
        const offset = target.getBoundingClientRect().top - headerHeight;

        window.scrollBy({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });
});

// Funcion para que el boton flotante lleve al usuario a la parte top de la web
const btnFloat = document.querySelector(".btn-float");
btnFloat.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Funcion para mostrar u ocultar el boton flotante
window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    btnFloat.classList.add("active");
  } else {
    btnFloat.classList.remove("active");
  }
});
