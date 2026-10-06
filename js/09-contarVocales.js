function contarVocales(texto) {
  const coincidencias = texto.match(/[aeiouáéíóú]/gi);
  return coincidencias ? coincidencias.length : 0;
}

// Ejemplo de uso:
const resultado9 = contarVocales("JavaScript es genial");
console.log("Resultado contarVocales:", resultado9);

// Mostrar en pantalla:
const contenedor9 = document.getElementById("resultado-9");
if (contenedor9) {
  contenedor9.textContent = resultado9 + " vocales";
}
