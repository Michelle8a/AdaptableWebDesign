const descuento10 = (precio) => precio - (precio*0.1);
const impuesto13 = (precio) => precio + (precio * 0.13);



class Venta{

    constructor(producto, cantidad, cliente, mayorista = false){

        if(cantidad > producto.stock){
            throw new Error("Cantidad mayor al stock");
        } 
        this.producto = producto;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.mayorista = mayorista;

        if(mayorista){
            producto.aplicarOperacionPrecio(descuento10);
        };
        producto.aplicarOperacionPrecio(impuesto13);
        producto.stock -= cantidad;
        this.total = producto.precio * cantidad;
    }
};

module.exports = {Venta, descuento10, impuesto13};