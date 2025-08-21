const prompt = require("prompt-sync")();

let promedioManiana = ingresarEdades(5, "mañana");
let promedioTarde = ingresarEdades(6, "tarde");
let promedioNoche = ingresarEdades(11, "noche");


console.log("\n--- Promedios por turno ---");
console.log(`Promedio turno mañana: ${promedioManiana.toFixed(2)}`);
console.log(`Promedio turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio turno noche: ${promedioNoche.toFixed(2)}`);


if (promedioManiana > promedioTarde && promedioManiana > promedioNoche) {
    console.log("El turno de la mañana tiene el promedio de edades mas alto");
} else if (promedioTarde > promedioManiana && promedioTarde > promedioNoche) {
    console.log("El turno de la tarde tiene el promedio de edades mas alto");
} else if (promedioNoche > promedioManiana && promedioNoche > promedioTarde) {
    console.log("El turno de la noche tiene el promedio de edades mas alto");
} else {
    console.log("Hay dos o mas turnos con el mismo promedio mayor");
}




function ingresarEdades(cantidad, turno) {
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno ${turno}: `));
        while (isNaN(edad) || edad <= 0) {
            edad = parseInt(prompt(`Ingrese de nuevo la edad del estudiante ${i} del turno ${turno}: `));
        }
        suma += edad;
    }
    return suma / cantidad;
}


