const prompt = require('prompt-sync')();

console.log("Ingrese 1 para convertir C a F, ingrese 2 para convertir F a C")
let opcion = parseInt(prompt("Ingrese su eleccion: "));

if (opcion == 1){
    var celcius = parseFloat(prompt("Ingrese los grados Celcius a convertir: "));
    var total = (celcius * 9/5) + 32;
}
else if(opcion == 2){
    var faren = parseFloat(prompt("Ingrese los grados Farenheit a convertir: "));
    var total = (faren - 32) * 5/9;
}
console.log("La cantidad convertida es: " + total.toFixed(2));
