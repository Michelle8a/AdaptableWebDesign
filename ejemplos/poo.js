// ===========================================
// PROGRAMACIÓN ORIENTADA A OBJETOS (POO) EN JAVASCRIPT
// ===========================================

// 1. Clases y objetos
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const juan = new Persona("Juan", 25);
juan.saludar(); // Hola, soy Juan

// 2. Herencia
class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad);
    this.puesto = puesto;
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando como ${this.puesto}`);
  }
}

const ana = new Empleado("Ana", 30, "Desarrolladora");
ana.saludar();   // Hola, soy Ana
ana.trabajar();  // Ana está trabajando como Desarrolladora

// 3. Getters y Setters
class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get nombre() {
    return this._nombre;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) this._precio = nuevoPrecio;
  }
}

const libro = new Producto("JS Avanzado", 20);
console.log(libro.nombre); // JS Avanzado
libro.precio = 25;

// 4. Métodos estáticos
class MathUtils {
  static sumar(a, b) {
    return a + b;
  }
}
console.log(MathUtils.sumar(3,4)); // 7

// 5. Encapsulación (variables privadas)
class Cuenta {
  #saldo;
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new Cuenta(100);
cuenta.depositar(50);
console.log(cuenta.verSaldo()); // 150

// 6. Polimorfismo
/*
class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto > this.#saldo) throw new Error("Fondos insuficientes.");
    this.#saldo -= monto;
  }
}

const cuentaAhorro = new CuentaAhorro(100);
cuentaAhorro.retirar(50);
console.log(cuentaAhorro.verSaldo()); // 50
*/
