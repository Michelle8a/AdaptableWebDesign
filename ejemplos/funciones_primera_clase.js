// ===========================================
// FUNCIONES DE PRIMERA CLASE EN JAVASCRIPT
// ===========================================

// 1. Declaración de funciones
// Función tradicional
function suma(a, b) {
  return a + b;
}

// Expresión de función
const resta = function(a, b) {
  return a - b;
}

// Arrow function
const multiplica = (a, b) => a * b;

console.log(suma(2,3));       // 5
console.log(resta(5,2));      // 3
console.log(multiplica(4,3)); // 12

// 2. Funciones como valores
const operaciones = [suma, resta, multiplica];
console.log(operaciones[0](2,3)); // 5

// 3. Funciones como argumentos
function operacion(a, b, fn) {
  return fn(a, b);
}
console.log(operacion(5,2,multiplica)); // 10

// 4. Funciones que retornan funciones (closures)
function crearSaludo(saludo) {
  return function(nombre) {
    console.log(`${saludo}, ${nombre}`);
  };
}
const hola = crearSaludo("Hola");
hola("Juan"); // Hola, Juan

// 5. Funciones anónimas
setTimeout(function() {
  console.log("Hola después de 1s");
}, 1000);

// 6. Funciones recursivas
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(3)); // 6