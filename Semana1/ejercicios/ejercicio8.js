const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un numero para mostrar la tabla de multiplicar: "));

if (isNaN(numero)) {
    console.log("Ingrese un numero valido.");
} else {
    console.log(`\nTabla de multiplicar del ${numero}:\n`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
