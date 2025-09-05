// techstore.js
const readline = require('readline-sync');

// ==================================
// Funciones de primera clase (operaciones sobre precios)
// ==================================
const descuentoMayorista = precio => precio * 0.9; // 10% descuento
const impuesto = precio => precio * 1.13;          // 13% impuesto

// ==================================
// Clases
// ==================================
class Producto {
  constructor(nombre, categoria, precio, stock) {
    if (!nombre) throw new Error("El nombre no puede estar vacío");
    if (precio <= 0) throw new Error("El precio debe ser mayor que 0");
    if (stock < 0) throw new Error("El stock no puede ser negativo");

    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }

  aplicarOperacionPrecio(fn) {
    this.precio = fn(this.precio);
  }
}

class Venta {
  constructor(producto, cantidad, cliente, esMayorista = false) {
    if (cantidad > producto.stock) throw new Error("Cantidad mayor al stock");
    this.producto = producto;
    this.cantidad = cantidad;
    this.cliente = cliente;
    this.esMayorista = esMayorista;

    // Aplicar descuento si es mayorista
    if (esMayorista) {
      producto.aplicarOperacionPrecio(descuentoMayorista);
    }

    // Aplicar impuesto
    producto.aplicarOperacionPrecio(impuesto);

    // Reducir stock
    producto.stock -= cantidad;

    this.total = producto.precio * cantidad;
  }
}

// ==================================
// Inventario y ventas
// ==================================
const inventario = [];
const ventas = [];

// ==================================
// Funciones del menú
// ==================================
function registrarProducto() {
  const nombre = readline.question("Nombre del producto: ");
  const categoria = readline.question("Categoria (Laptop/Celular/Tablet): ");
  const precio = parseFloat(readline.question("Precio base: "));
  const stock = parseInt(readline.question("Stock disponible: "), 10);

  if (inventario.find(p => p.nombre === nombre)) {
    console.log("Error: Producto ya existe");
    return;
  }

  try {
    const producto = new Producto(nombre, categoria, precio, stock);
    inventario.push(producto);
    console.log("Producto registrado con éxito");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

function registrarVenta() {
  if (inventario.length === 0) {
    console.log("No hay productos en inventario");
    return;
  }

  console.log("Productos disponibles:");
  inventario.forEach((p, i) => {
    console.log(`${i + 1}. ${p.nombre} (${p.categoria}) - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`);
  });

  const index = parseInt(readline.question("Seleccione producto (número): "), 10) - 1;
  if (index < 0 || index >= inventario.length) {
    console.log("Producto inválido");
    return;
  }

  const producto = inventario[index];
  const cantidad = parseInt(readline.question("Cantidad a comprar: "), 10);
  const cliente = readline.question("Nombre del cliente: ");
  const esMayorista = readline.question("¿Es mayorista? (s/n): ").toLowerCase() === 's';

  try {
    const venta = new Venta(producto, cantidad, cliente, esMayorista);
    ventas.push(venta);
    console.log(`Venta registrada. Total: ${venta.total.toFixed(2)}`);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

function mostrarInventario() {
  console.log("=== INVENTARIO ===");
  inventario.forEach(p => {
    console.log(`${p.nombre} (${p.categoria}) - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`);
  });
}

function mostrarHistorialVentas() {
  console.log("=== HISTORIAL DE VENTAS ===");
  ventas.forEach(v => {
    console.log(`Cliente: ${v.cliente}, Producto: ${v.producto.nombre}, Cantidad: ${v.cantidad}, Total: ${v.total.toFixed(2)}`);
  });
}

// ==================================
// Menú principal
// ==================================
function menu() {
  while (true) {
    console.log("\n--- TechStore ---");
    console.log("1. Registrar producto");
    console.log("2. Registrar venta");
    console.log("3. Mostrar inventario");
    console.log("4. Mostrar historial de ventas");
    console.log("5. Salir");

    const opcion = readline.question("Seleccione opción: ");

    switch (opcion) {
      case '1': registrarProducto(); break;
      case '2': registrarVenta(); break;
      case '3': mostrarInventario(); break;
      case '4': mostrarHistorialVentas(); break;
      case '5': return;
      default: console.log("Opción inválida, intente de nuevo"); break;
    }
  }
}

menu();
