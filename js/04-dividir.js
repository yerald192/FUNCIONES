function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// Ejemplo de uso:
const resultado4 = dividir(20, 4);
console.log("Resultado dividir:", resultado4);

// Mostrar en pantalla:
const contenedor4 = document.getElementById("resultado-4");
if (contenedor4) {
  contenedor4.textContent = resultado4;
}
