function multiplicar(a, b) {
  return a * b;
}

// Ejemplo de uso:
const resultado3 = multiplicar(6, 7);
console.log("Resultado multiplicar:", resultado3);

// Mostrar en pantalla:
const contenedor3 = document.getElementById("resultado-3");
if (contenedor3) {
  contenedor3.textContent = resultado3;
}
