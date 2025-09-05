// inventario.js
const { Producto, ProductoElectronico } = require('./producto');
const { Venta } = require('./venta');

const inventario = [];
const ventas = [];

function agregarProducto(nombre, categoria, precio, stock, marca=null) {
  if(inventario.find(p => p.nombre === nombre)) {
    throw new Error("Producto ya existe");
  }

  let producto;
  if(marca) {
    // Creamos un producto electrónico si tiene marca
    producto = new ProductoElectronico(nombre, categoria, precio, stock, marca);
  } else {
    producto = new Producto(nombre, categoria, precio, stock);
  }

  inventario.push(producto);
  return producto;
}

function registrarVenta(producto, cantidad, cliente, esMayorista=false) {
  const venta = new Venta(producto, cantidad, cliente, esMayorista);
  ventas.push(venta);
  return venta;
}

module.exports = { inventario, ventas, agregarProducto, registrarVenta };
