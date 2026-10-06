function factorial(numero) {
  if (numero < 0) return "No definido";
  let total = 1;
  for (let i = 1; i <= numero; i++) {
    total *= i;
  }
  return total;
}

// Ejemplo de uso:
const resultado11 = factorial(5);
console.log("Resultado factorial:", resultado11);

// Mostrar en pantalla:
const contenedor11 = document.getElementById("resultado-11");
if (contenedor11) {
  contenedor11.textContent = resultado11;
}
