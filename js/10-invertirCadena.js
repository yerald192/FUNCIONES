function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

// Ejemplo de uso:
const resultado10 = invertirCadena("Hola Mundo");
console.log("Resultado invertirCadena:", resultado10);

// Mostrar en pantalla:
const contenedor10 = document.getElementById("resultado-10");
if (contenedor10) {
  contenedor10.textContent = `"${resultado10}"`;
}
