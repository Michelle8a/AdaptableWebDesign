const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "))

checarEdades(edad);


function checarEdades(edad) {
    if (isNaN(edad) || edad <= 0) {
        console.log("Ingrese una edad valida");
    }
    else {
        let estado = edad <= 18 ? "menor de edad" : "mayor de edad";
        console.log(`Usted es: ${estado}`);
    }
}

