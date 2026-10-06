function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Ejemplo de uso:
const resultado6 = areaTriangulo(10, 5);
console.log("Resultado areaTriangulo:", resultado6);

// Mostrar en pantalla:
const contenedor6 = document.getElementById("resultado-6");
if (contenedor6) {
  contenedor6.textContent = resultado6 + " u²";
}
