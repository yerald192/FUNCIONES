function calcularPromedio(numeros) {
  const suma = numeros.reduce((acumulado, num) => acumulado + num, 0);
  return suma / numeros.length;
}

// Ejemplo de uso:
const resultado13 = calcularPromedio([14, 16, 18, 12]);
console.log("Resultado calcularPromedio:", resultado13);

// Mostrar en pantalla:
const contenedor13 = document.getElementById("resultado-13");
if (contenedor13) {
  contenedor13.textContent = resultado13;
}
