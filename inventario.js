const {Producto, ProductoElectronico} = require('./producto');
const {Venta} = require('./venta');

const inventario = [];
const ventas = [];

function agregarProducto(nombre, categoria, precio, stock, marca=null) {
  if(inventario.find(p => p.nombre === nombre)) {
    throw new Error("El producto ya existe");
  }

  let producto;
  if(marca) {
    producto = new ProductoElectronico(nombre, categoria, precio, stock, marca);
  } else {
    producto = new Producto(nombre, categoria, precio, stock);
  }

  inventario.push(producto);
  return producto;
}

function agregarVenta(producto, cantidad, cliente, mayorista=false) {
    let venta = new Venta(producto, cantidad, cliente, mayorista);
    ventas.push(venta);
    return venta;
};

module.exports = {inventario, ventas, agregarProducto, agregarVenta};