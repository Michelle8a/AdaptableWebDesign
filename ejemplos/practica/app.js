// app.js
const prompt = require('prompt-sync')();
const { inventario, ventas, agregarProducto, registrarVenta } = require('./inventario');

function menu() {
  while(true) {
    console.log("\n--- TechStore ---");
    console.log("1. Registrar producto");
    console.log("2. Registrar venta");
    console.log("3. Mostrar inventario");
    console.log("4. Mostrar historial de ventas");
    console.log("5. Salir");

    const opcion = prompt("Seleccione opción: ");

    switch(opcion) {
      case '1':
        try {
          const nombre = prompt("Nombre del producto: ");
          const categoria = prompt("Categoria (Laptop/Celular/Tablet): ");
          const precio = parseFloat(prompt("Precio base: "));
          const stock = parseInt(prompt("Stock disponible: "));
          
          let marca = null;
          
          if(categoria.toLowerCase() === "laptop" || categoria.toLowerCase() === "celular" || categoria.toLowerCase() === "tablet") {
            marca = prompt("Marca del producto: ");
          }
          
          agregarProducto(nombre, categoria, precio, stock, marca);
          
          console.log("Producto registrado con éxito");
        } catch(err) {
          console.log("Error:", err.message);
        }
        break;

      case '2':
        if(inventario.length === 0) { 
          console.log("No hay productos en inventario"); 
          break; 
        }

        console.log("Productos disponibles:");
        
        //p es el producto actual, i es el indice del producto en el array
        inventario.forEach((p,i) => 
          console.log(`${i+1}. ${p.nombre} - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`)
        );

        const index = parseInt(prompt("Seleccione producto: ")) - 1;// El -1 ajusta el numero que se ingreso al indice
        
        if(index < 0 || index >= inventario.length) { 
          console.log("Producto inválido"); 
          break; 
        }

        const producto = inventario[index];
        const cantidad = parseInt(prompt("Cantidad a comprar: "));
        const cliente = prompt("Nombre del cliente: ");
        const esMayorista = prompt("¿Es mayorista? (s/n): ").toLowerCase() === 's';

        try {
          const venta = registrarVenta(producto, cantidad, cliente, esMayorista);
          console.log(`Venta registrada. Total: ${venta.total.toFixed(2)}`);
        } catch(err) {
          console.log("Error:", err.message);
        }
        break;

      case '3':
        console.log("=== INVENTARIO ===");
        inventario.forEach(p => {
          let info = `${p.nombre} - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`;
          if(p.marca) info += ` - Marca: ${p.marca}`;
          console.log(info);
        });
        break;

      case '4':
        console.log("=== HISTORIAL DE VENTAS ===");
        ventas.forEach(v => 
          console.log(`Cliente: ${v.cliente}, Producto: ${v.producto.nombre}, Cantidad: ${v.cantidad}, Total: ${v.total.toFixed(2)}`)
        );
        break;

      case '5':
        console.log("Saliendo del sistema...");
        return;

      default:
        console.log("Opción inválida, intente de nuevo");
    }
  }
}

menu();
