const prompt = require("prompt-sync")()

let num1 = parseInt(prompt("Ingrese un numero entero: "))
let num2 = parseInt(prompt("Ingrese otro numero entero: "))

if (isNaN(num1) || isNaN(num2)) {
    console.log("Ingrese nuemros validos");
} else {
    let resultado = calcular(num1, num2);
    console.log(`El numero mayor es: ${resultado}`);
}



function calcular(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else if (num2 < num1) {
        return num1;
    } else {
        return "Ambos son iguales";
    }
}


