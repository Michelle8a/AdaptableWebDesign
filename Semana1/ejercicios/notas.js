const prompt = require('prompt-sync')();

let notaTeorica = parseFloat(prompt("Ingrese la nota teorica: "));
let notaPractica = parseFloat(prompt("Ingrese la nota practica: "));

if (
    isNaN(notaTeorica) || notaTeorica < 0 || notaTeorica > 10 ||
    isNaN(notaPractica) || notaPractica < 0 || notaPractica > 10
) {
    console.log("Ingrese notas validas entre 0 y 10.");
} else {

    let promedio = notaTeorica * 0.2 + notaPractica * 0.8;
    
    //quise probar la version corta del if else
    let estado = promedio >= 7 ? "Aprobado" : "Reprobado";

    console.log(`Promedio: ${promedio.toFixed(2)} - Estado: ${estado}`);
}