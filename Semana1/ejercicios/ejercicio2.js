const prompt = require("prompt-sync")();

calcularNota();

function calcularNota() {
    let nombre = prompt("Ingrese el nombre del alumno: ");
    let carnet = parseInt(prompt("Ingrese el carnet del alumno: "));

    let examen = parseFloat(prompt("Ingrese la nota de examen: "));
    let tareas = parseFloat(prompt("Ingrese la nota de tareas: "));
    let asist = parseFloat(prompt("Ingrese la nota de asistencia: "));
    let investi = parseFloat(prompt("Ingrese la nota de investigacion: "));

    //Validar la nota
    if (isNaN(examen) || isNaN(tareas) || isNaN(asist) || isNaN(investi)
        || examen < 0 || tareas < 0 || asist < 0 || investi < 0) {

        console.log("Ingrese una nota valida")

    } else {
        let notaFinal = (examen * 0.2) + (tareas * 0.40) + (asist * 0.10) + (investi * 0.30);

        console.log(`\nAlumno: ${nombre}`);
        console.log(`Carnet: ${carnet}`);
        console.log(`Nota Final: ${notaFinal}`);
    }
}
