class Cuenta {

    #saldo = 0; 
    // el hashtag es para declarar atributos privados
    #historial = [];

    constructor(titular){
        this.titular = titular;
    }

    depositar(monto){
        this.#validarMonto(monto);
        this.#saldo += monto;
        this.#agregarHistorial("DEPOSITO", monto)
        return this.#saldo
    }

    retirar(monto){
        this.#validarMonto(monto);
        if(monto > this.#saldo) throw new Error("Fondos insuficientes."); 
        this.#saldo -= monto;
        this.#agregarHistorial("RETIRO", monto)
        return this.#saldo
    }

    obtenerSaldo(){
        return this.#saldo;
    }

    obtenerHistorial(){
        return this.#historial;
    }

    aplicarOperacion(funcionOperacion, etiqueta = "OPERACION"){
        const nuevoSaldo = funcionOperacion(this.#saldo)
        if (typeof nuevoSaldo != "number" || Number.isNaN(nuevoSaldo)) {
            throw new Error("La operacion retorno un valor no valido");
            
        }
        this.#saldo = nuevoSaldo;
        this.#agregarHistorial(etiqueta, null);
        return this.#saldo;
    }

    #validarMonto(m){
        if (typeof m !== "number" || m <= 0) throw new Error("Monto inválido.");
    }

    #agregarHistorial(tipo, monto){
        this.#historial.push({tipo, monto, fecha: new Date()});
    }
}

module.exports = Cuenta;