const Cuenta = require("./Cuenta")

class CuentaAhorro extends Cuenta{
    
    constructor(titular){
        
        super(titular); //herencia
        this.tipo = "Ahorro";

    }

    //polimorfismo
    retirar(monto){
        const comision = 0.10;
        const total = monto + (monto * comision);
        if (totalRetirar > this.obtenerSaldo()) {
            throw new Error("Retiro rechazado: Saldo insuficiente (Comision incluida)");
            
        }
        super.retirar(monto); //hace el descuento del monto a retirar
        super.aplicarOperacion((saldo) => saldo - comision, "COMISION");
        return this.obtenerSaldo();
    }
}

module.exports = CuentaAhorro;