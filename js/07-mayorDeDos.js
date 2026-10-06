function mayorDeDos(a, b) {
  return a > b ? a : b;
}

// Ejemplo de uso:
const resultado7 = mayorDeDos(15, 27);
console.log("Resultado mayorDeDos:", resultado7);

// Mostrar en pantalla:
const contenedor7 = document.getElementById("resultado-7");
if (contenedor7) {
  contenedor7.textContent = resultado7;
}
