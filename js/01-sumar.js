function sumar(a, b) {
  return a + b;
}

// Ejemplo de uso:
const resultado1 = sumar(5, 3);
console.log("Resultado sumar:", resultado1);

// Mostrar en pantalla:
const contenedor1 = document.getElementById("resultado-1");
if (contenedor1) {
  contenedor1.textContent = resultado1;
}
