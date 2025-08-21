const prompt = require("prompt-sync")();

let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumaPares = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Ingrese un numero ${i}: `));

    if (isNaN(num)) {
        console.log("El valor no es valido");
        i--;
        continue;
    }

    if (num < 0) { //Positivos y negativos
        negativos++;
    } else if (num > 0) {
        positivos++;
    }

    if (num % 15 === 0) { //Multiplos de 15
        multiplos15++;
    }

    if (num % 2 === 0) { //Pares
        sumaPares += num;
    }
}

console.log("\nRESULTADOS:");
console.log(`Cantidad de numeros negativos: ${negativos}`);
console.log(`Cantidad de numeros positivos: ${positivos}`);
console.log(`Cantidad de multiplos de 15: ${multiplos15}`);
console.log(`Suma de los numeros pares: ${sumaPares}`);
