const Cuenta = require("./Cuenta");
const CuentaAhorro = require("./CuentaAhorro");

class CuentaCorriente extends Cuenta {
    
    constructor(titular, limiteSobregiro){
        
        super(titular); //herencia
        this.tipo = "Corriente";
        this.limiteSobregiro = limiteSobregiro;
    }

    //polimorfismo
    retirar(monto){
        const montoProyectado = this.obtenerSaldo() - monto;
        if (montoProyectado > this.limiteSobregiro) {
            throw new Error("Retiro rechazado: Excede el limite de sobregiro ");
            
        }
        try {
            return super.retirar(monto)
        } catch (error) {
            if (error.message.inludes("Fondos Insuficientes.")) {
                return super.aplicarOperacion((saldo) => saldo - monto)
            }
        }
    }
}

module.exports = CuentaCorriente;