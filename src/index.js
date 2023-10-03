const option = document.getElementById("desplegable_frutas");

option.addEventListener("change", function () {
  const eleccion = option.value;
  console.log(eleccion);
  return eleccion;
});
