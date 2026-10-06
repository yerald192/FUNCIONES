function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Ejemplo de uso:
const resultado8 = celsiusAFahrenheit(25);
console.log("Resultado celsiusAFahrenheit:", resultado8);

// Mostrar en pantalla:
const contenedor8 = document.getElementById("resultado-8");
if (contenedor8) {
  contenedor8.textContent = resultado8 + " °F";
}
