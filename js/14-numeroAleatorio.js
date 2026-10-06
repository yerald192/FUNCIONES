function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo de uso:
const resultado14 = numeroAleatorio(1, 100);
console.log("Resultado numeroAleatorio:", resultado14);

// Mostrar en pantalla:
const contenedor14 = document.getElementById("resultado-14");
if (contenedor14) {
  contenedor14.textContent = resultado14;
}
