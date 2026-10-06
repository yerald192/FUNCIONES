function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/\s+/g, "");
  const invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

// Ejemplo de uso:
const resultado12 = esPalindromo("reconocer");
console.log("Resultado esPalindromo:", resultado12);

// Mostrar en pantalla:
const contenedor12 = document.getElementById("resultado-12");
if (contenedor12) {
  contenedor12.textContent = resultado12 ? "true (Es palíndromo)" : "false (No es palíndromo)";
}
