// venta.js
const descuentoMayorista = precio => precio * 0.9;
const impuesto = precio => precio * 1.13;

class Venta {
  constructor(producto, cantidad, cliente, esMayorista = false) {
    if(cantidad > producto.stock) throw new Error("Cantidad mayor al stock");

    this.producto = producto;
    this.cantidad = cantidad;
    this.cliente = cliente;
    this.esMayorista = esMayorista;

    // Aplicar funciones de primera clase
    if(esMayorista) producto.aplicarOperacionPrecio(descuentoMayorista);
    
    producto.aplicarOperacionPrecio(impuesto);

    // Actualizar stock
    producto.stock -= cantidad;

    // Calcular total
    this.total = producto.precio * cantidad;
  }
}

module.exports = { Venta, descuentoMayorista, impuesto };

