const prompt = require("prompt-sync")();

let origen = prompt("Ingrese la ciudad de origen: ");
console.log("\nSeleccione el destino:");
console.log("1. La Costa del Sol");
console.log("2. Panchimalco");
console.log("3. Puerto el Triunfo");
let opcionDestino = prompt("Opcion (1-3): ");
let precio = parseFloat(prompt("Ingrese el precio del viaje: "));


if (isNaN(precio) || precio <= 0) {
    console.log("Ingrese un precio valido.");
} else {
    calcularDescuento(origen, opcionDestino, precio);
}



function calcularDescuento(origen, opcionDestino, precio) {
    let descuento = 0;
    let destino = "";

    if (origen.toLowerCase() === "palma") {
        switch (opcionDestino) {
            case "1":
                descuento = 0.05;
                destino = "La Costa del Sol";
                break;
            case "2":
                descuento = 0.10;
                destino = "Panchimalco";
                break;
            case "3":
                descuento = 0.15;
                destino = "Puerto el Triunfo";
                break;
            default:
                console.log("La opcion no es valida");
                return;
        }

        let montoDescuento = precio * descuento;
        let precioFinal = precio - montoDescuento;

        console.log(`\nViaje desde ${origen} hacia ${destino}`);
        console.log(`Descuento aplicado: ${descuento * 100}%`);
        console.log(`Precio con descuento: $${precioFinal.toFixed(2)}`);
    } else {
        console.log("El descuento solo aplica si el origen es Palma.");
    }
}



