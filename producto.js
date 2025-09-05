class Producto{
    #precio;
    #stock;

    constructor(nombre, categoria, precio, stock){
        if(!nombre){
            throw new Error('El nombre no puede estar vacio')
        };
        if(precio <= 0 || isNaN(precio)){
            throw new Error('El precio debe ser mayor a 0')
        };
        if(stock < 0 || isNaN(stock)) {
            throw new Error("El stock no puede ser menor a 0")
        };
        
        this.nombre = nombre;
        this.categoria = categoria;
        this.#precio = precio;
        this.#stock = stock;

    };

    aplicarOperacionPrecio(fn){
            this.#precio = fn(this.#precio);
        };

    get precio(){
        return this.#precio
    }

    get stock(){
        return this.#stock;
    }

    set stock(valor){
        if(valor < 0 || isNaN(valor)){
            throw new Error("El stock no puede ser negativo");
        }

        this.#stock = valor
    }
};


class ProductoElectronico extends Producto {
  constructor(nombre, categoria, precio, stock, marca) {
    super(nombre, categoria, precio, stock);
    this.marca = marca;
  }

  aplicarOperacionPrecio(fn) {
    console.log(`Precio del producto: ${this.nombre}`);
    super.aplicarOperacionPrecio(fn);
  }
}


module.exports = {Producto, ProductoElectronico};