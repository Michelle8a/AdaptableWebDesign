// ===========================================
// ESTRUCTURAS DE CONTROL EN JAVASCRIPT
// ===========================================

// 1. Condicionales
// If - else
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ternario
let acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso);

// Switch
let dia = 3;
switch(dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// 2. Bucles (iterativos y repetitivos)

// For
for (let i = 0; i < 5; i++) {
  console.log("For:", i);
}

// For con arrays
const numeros = [10, 20, 30];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// For...of (recorrer valores)
for (const num of numeros) {
  console.log("For...of:", num);
}

// For...in (recorrer propiedades de objetos)
const persona = {nombre: "Juan", edad: 25};
for (const key in persona) {
  console.log(key, persona[key]);
}

// While
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

// Do...while
let j = 0;
do {
  console.log("Do...while:", j);
  j++;
} while (j < 3);

// Control de flujo
// break -> salir del bucle
// continue -> saltar a la siguiente iteración
for (let k = 0; k < 5; k++) {
  if (k === 2) continue; // salta el 2
  if (k === 4) break;    // sale del bucle
  console.log("Control de flujo:", k);
}
