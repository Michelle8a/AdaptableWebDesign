const prompt = require("prompt-sync")();

let nombre = prompt("Ingrese el nombre del trabajador: ");
let categoria = prompt("Ingrese la categoria del trabjador: ");
let salario = parseFloat(prompt("Ingrese el salario: "));

calcularAumento(nombre, categoria, salario);


function calcularAumento(nombre, categoria, salario) {
    if (isNaN(salario) || salario < 0) {

        console.log("Ingrese un salario valido");

    } else {
        let aumento = 0;
        let categoriaValida = true;

        switch (categoria.toUpperCase()) {
            case 'A':
                var aumento = salario + (salario * 0.15);
                break;

            case 'B':
                var aumento = salario + (salario * 0.30);
                break;

            case 'C':
                var aumento = salario + (salario * 0.10);
                break;

            case 'D':
                var aumento = salario + (salario * 0.20);
                break;

            default:
                categoriaValida = false;
                console.log("Ingrese una categoria valida");
                break;
        }

        if (categoriaValida) {
            console.log("\nPLANTILLA");
            console.log(`Nombre: ${nombre}`);
            console.log(`Categoria: ${categoria.toUpperCase()}`);
            console.log(`Salario con Aumento: ${aumento}`);
        }

    }
}



