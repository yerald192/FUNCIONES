function esPar(numero) {
  return numero % 2 === 0;
}

// Ejemplo de uso:
const resultado5 = esPar(8);
console.log("Resultado esPar:", resultado5);

// Mostrar en pantalla:
const contenedor5 = document.getElementById("resultado-5");
if (contenedor5) {
  contenedor5.textContent = resultado5 ? "true (Es par)" : "false (Es impar)";
}
