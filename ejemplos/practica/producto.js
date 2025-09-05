// producto.js

class Producto {
  #precio;
  #stock;

  constructor(nombre, categoria, precio, stock) {
    if(!nombre) throw new Error("El nombre no puede estar vacío");
    if(precio <= 0) throw new Error("El precio debe ser mayor a 0");
    if(stock < 0) throw new Error("El stock no puede ser negativo");

    this.nombre = nombre;
    this.categoria = categoria;
    this.#precio = precio;
    this.#stock = stock;
  }

  aplicarOperacionPrecio(fn) { //recibe una funcion como argumento
    this.#precio = fn(this.#precio); 
    //toma el precio actual y aplica la ffuncion sobre el precio
  }

  get precio() { return this.#precio; }
  get stock() { return this.#stock; }
  set stock(valor) { 
    if(valor < 0) throw new Error("Stock no puede ser negativo");
    this.#stock = valor; 
  }
}

// Clase hija para herencia y polimorfismo
class ProductoElectronico extends Producto {
  constructor(nombre, categoria, precio, stock, marca) {
    super(nombre, categoria, precio, stock);
    this.marca = marca; //Atributo nuevo que solo lo tiene la clase hija
  }

  // Polimorfismo: redefinimos el método de aplicar operación de precio
  aplicarOperacionPrecio(fn) {
    console.log(`Aplicando operación de precio al producto electrónico: ${this.nombre}`);
    super.aplicarOperacionPrecio(fn);
  }
}

module.exports = { Producto, ProductoElectronico };

