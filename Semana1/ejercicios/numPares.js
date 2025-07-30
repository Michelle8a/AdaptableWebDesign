const prompt = require('prompt-sync')();

let n = parseInt(prompt("Ingrese un numero entero: "));
var suma = 0;

if (isNaN(n)) {
    console.log("Debe ingresar un numero entero valido");
} else {
    for (let i = 0; i <= n; i++) {

        if (i % 2 === 0) {
            suma += i;
        }
    }
    console.log(`La suma de los numeros pares del uno al ${n} es ${suma}`);
}
