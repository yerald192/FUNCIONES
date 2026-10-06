// 1. Sumar dos números
function sumar(a, b) {
  return a + b;
}

// Ejemplo de uso:
const resultado1 = sumar(5, 3);
console.log("1. sumar(5, 3) =", resultado1);

// Mostrar en pantalla:
const elResultado1 = document.getElementById("resultado-1");
if (elResultado1) elResultado1.textContent = resultado1;


// 2. Restar dos números
function restar(a, b) {
  return a - b;
}

// Ejemplo de uso:
const resultado2 = restar(10, 4);
console.log("2. restar(10, 4) =", resultado2);

// Mostrar en pantalla:
const elResultado2 = document.getElementById("resultado-2");
if (elResultado2) elResultado2.textContent = resultado2;


// 3. Multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Ejemplo de uso:
const resultado3 = multiplicar(6, 7);
console.log("3. multiplicar(6, 7) =", resultado3);

// Mostrar en pantalla:
const elResultado3 = document.getElementById("resultado-3");
if (elResultado3) elResultado3.textContent = resultado3;


// 4. Dividir dos números
function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// Ejemplo de uso:
const resultado4 = dividir(20, 4);
console.log("4. dividir(20, 4) =", resultado4);

// Mostrar en pantalla:
const elResultado4 = document.getElementById("resultado-4");
if (elResultado4) elResultado4.textContent = resultado4;


// 5. Determinar si un número es par
function esPar(numero) {
  return numero % 2 === 0;
}

// Ejemplo de uso:
const resultado5 = esPar(8);
console.log("5. esPar(8) =", resultado5);

// Mostrar en pantalla:
const elResultado5 = document.getElementById("resultado-5");
if (elResultado5) {
  elResultado5.textContent = resultado5 ? "true (Es par)" : "false (Es impar)";
}


// 6. Calcular el área de un triángulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Ejemplo de uso:
const resultado6 = areaTriangulo(10, 5);
console.log("6. areaTriangulo(10, 5) =", resultado6);

// Mostrar en pantalla:
const elResultado6 = document.getElementById("resultado-6");
if (elResultado6) elResultado6.textContent = resultado6 + " u²";


// 7. Obtener el mayor de dos números
function mayorDeDos(a, b) {
  return a > b ? a : b;
}

// Ejemplo de uso:
const resultado7 = mayorDeDos(15, 27);
console.log("7. mayorDeDos(15, 27) =", resultado7);

// Mostrar en pantalla:
const elResultado7 = document.getElementById("resultado-7");
if (elResultado7) elResultado7.textContent = resultado7;


// 8. Convertir grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Ejemplo de uso:
const resultado8 = celsiusAFahrenheit(25);
console.log("8. celsiusAFahrenheit(25) =", resultado8);

// Mostrar en pantalla:
const elResultado8 = document.getElementById("resultado-8");
if (elResultado8) elResultado8.textContent = resultado8 + " °F";


// 9. Contar vocales en un texto
function contarVocales(texto) {
  const coincidencias = texto.match(/[aeiouáéíóú]/gi);
  return coincidencias ? coincidencias.length : 0;
}

// Ejemplo de uso:
const resultado9 = contarVocales("JavaScript es genial");
console.log("9. contarVocales('JavaScript es genial') =", resultado9);

// Mostrar en pantalla:
const elResultado9 = document.getElementById("resultado-9");
if (elResultado9) elResultado9.textContent = resultado9 + " vocales";


// 10. Invertir una cadena de texto
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

// Ejemplo de uso:
const resultado10 = invertirCadena("Hola Mundo");
console.log("10. invertirCadena('Hola Mundo') =", resultado10);

// Mostrar en pantalla:
const elResultado10 = document.getElementById("resultado-10");
if (elResultado10) elResultado10.textContent = `"${resultado10}"`;


// 11. Calcular el factorial de un número
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
console.log("11. factorial(5) =", resultado11);

// Mostrar en pantalla:
const elResultado11 = document.getElementById("resultado-11");
if (elResultado11) elResultado11.textContent = resultado11;


// 12. Verificar si una palabra es palíndromo
function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/\s+/g, "");
  const invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

// Ejemplo de uso:
const resultado12 = esPalindromo("reconocer");
console.log("12. esPalindromo('reconocer') =", resultado12);

// Mostrar en pantalla:
const elResultado12 = document.getElementById("resultado-12");
if (elResultado12) {
  elResultado12.textContent = resultado12 ? "true (Es palíndromo)" : "false (No es palíndromo)";
}


// 13. Calcular promedio de un arreglo de números
function calcularPromedio(numeros) {
  const suma = numeros.reduce((acumulado, num) => acumulado + num, 0);
  return suma / numeros.length;
}

// Ejemplo de uso:
const resultado13 = calcularPromedio([14, 16, 18, 12]);
console.log("13. calcularPromedio([14, 16, 18, 12]) =", resultado13);

// Mostrar en pantalla:
const elResultado13 = document.getElementById("resultado-13");
if (elResultado13) elResultado13.textContent = resultado13;


// 14. Generar un número aleatorio en un rango
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo de uso:
const resultado14 = numeroAleatorio(1, 100);
console.log("14. numeroAleatorio(1, 100) =", resultado14);

// Mostrar en pantalla:
const elResultado14 = document.getElementById("resultado-14");
if (elResultado14) elResultado14.textContent = resultado14;


// 15. Contar caracteres de una cadena
function contarCaracteres(texto) {
  return texto.length;
}

// Ejemplo de uso:
const resultado15 = contarCaracteres("Desarrollo Web");
console.log("15. contarCaracteres('Desarrollo Web') =", resultado15);

// Mostrar en pantalla:
const elResultado15 = document.getElementById("resultado-15");
if (elResultado15) elResultado15.textContent = resultado15 + " caracteres";
