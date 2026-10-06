function contarCaracteres(texto) {
  return texto.length;
}

// Ejemplo de uso:
const resultado15 = contarCaracteres("Desarrollo Web");
console.log("Resultado contarCaracteres:", resultado15);

// Mostrar en pantalla:
const contenedor15 = document.getElementById("resultado-15");
if (contenedor15) {
  contenedor15.textContent = resultado15 + " caracteres";
}
