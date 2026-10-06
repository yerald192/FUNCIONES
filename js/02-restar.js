function restar(a, b) {
  return a - b;
}

// Ejemplo de uso:
const resultado2 = restar(10, 4);
console.log("Resultado restar:", resultado2);

// Mostrar en pantalla:
const contenedor2 = document.getElementById("resultado-2");
if (contenedor2) {
  contenedor2.textContent = resultado2;
}
