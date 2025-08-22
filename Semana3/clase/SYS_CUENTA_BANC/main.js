const CuentaAhorro = require("./modelo/CuentaAhorro");
const CuentaCorriente = require("./modelo/CuentaCorriente");

const prompt = require("./node_modules/prompt-sync")();

const cuentas = {
    ahorro: new CuentaAhorro("Pepito Fuentes"),
    corriente: new CuentaCorriente("Pepito Fuentes", 100)
}

function seleccionarCuenta(){
    console.log("\nSeleccione una cuenta: ")
    console.log("1. Cuenta de Ahorro")
    console.log("1. Cuenta Corriente")

    const opcion = prompt("Opcion: ")
    if (opcion === "1") return cuentas.ahorro;
    if (opcion === "2") return cuentas.corriente;
    console.log("Opcion invalida");
    return null
    
}


function menu(){
    console.log("\n---MI BANQUITO---")
    console.log("1. Depositar")
    console.log("2. Retirar")
    console.log("3. Ver Saldo")
    console.log("4. Ver historial")
    console.log("5. Aplicar operacion especial")
    console.log("6. Salir")
}

(function main(){
    console.clear();

    console.log("Bienvenido a mi banquito");

    while (true) {
        menu();
        const opcion = prompt("Elije una operacion: ");
        if (opcion === "6") break;

        if (!["1", "2", "3", "4", "5"].includes(opcion)) {
            console.log("\nOpcion invalida");
            continue;
        }

        const cuenta = seleccionarCuenta();
        if (!cuenta) continue;

        try {
            switch (opcion) {
                case "1":{
                    const monto = Number(prompt("Monto a depositar: "))
                    const saldo = cuenta.depositar(monto);
                    console.log(`Deposito realizado. Saldo actual: ${saldo.toFixed(2)}`);
                    break;
                }
                
                case "2":{
                    const monto = Number(prompt("Monto a depositar: "))
                    const saldo = cuenta.retirar(monto);
                    console.log(`Retiro realizado. Saldo actual: ${saldo.toFixed(2)}`);
                    break;
                }

                case "3":{
                    console.log(`Saldo actual: ${cuenta.obtenerSaldo().toFixed(2)}`);
                    break;
                }

                case "4":{
                    console.log("Historial de operaciones:")
                    const historial = cuenta.obtenerHistorial();
                    historial.forEach((h, i) => {
                        console.log(`${i + 1}. ${h.tipo}, ${h.monto} @ ${new Date(h.fecha).toLocaleString()}`)
                    });

                    if(historial.length === 0) console.log("No hay movimientos")
                    break;
                }
                    
                default:
                    console.log("Opcion invalida")
                    break;
            }
        } catch (error) {
            console.log("Error: ", error.message)
        }
    } 
    
    console.log("Adios vaquero")

})();