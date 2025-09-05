const { inventario, ventas, agregarProducto, agregarVenta } = require("./inventario");

const prompt = require('prompt-sync')();

function menu() {


    while (true) {

        console.log("1. Registrar Producto");
        console.log("2. Registrar Venta");
        console.log("3. Mostrar Inventario");
        console.log("4. Mostrar Historial de Ventas");
        console.log("5. Salir");

        let opcion = prompt("Ingrese su opcion: ")

        switch (opcion) {
            case "1":

                try {
                    const nombre = prompt("Nombre del producto: ");
                    const categoria = prompt("Categoria (Laptop/Celular/Tablet): ");
                    const precio = parseFloat(prompt("Precio base: "));
                    const stock = parseInt(prompt("Stock disponible: "));

                    let marca = null;

                    if (categoria.toLowerCase() === "laptop" || categoria.toLowerCase() === "celular" || categoria.toLowerCase() === "tablet") {
                        marca = prompt("Marca del producto: ");
                    }

                    agregarProducto(nombre, categoria, precio, stock, marca);

                    console.log("Producto registrado");
                } catch (error) {
                    console.log("Error:", error.message);
                }

                break;

            case "2":
                if (inventario.length === 0) {
                    console.log("No hay productos en el inventario");
                    break;
                }

                console.log("Productos disponibles:");


                inventario.forEach((p, i) =>
                    console.log(`${i + 1}. ${p.nombre} - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`)
                );



                const index = parseInt(prompt("Seleccione un producto: ")) -1;

                if (index < 0 || index >= inventario.length) {
                    console.log("Producto invalido");
                    break;
                }

                const producto = inventario[index];
                const cantidad = parseInt(prompt("Cantidad a comprar: "));
                const cliente = prompt("Nombre del cliente: ");
                const mayorista = prompt("¿Es mayorista? (s/n): ").toLowerCase() === 's';

                try {
                    const venta = agregarVenta(producto, cantidad, cliente, mayorista);
                    console.log(`Venta registrada. Total: ${venta.total.toFixed(2)}`);
                } catch (error) {
                    console.log("Error:", error.message);
                }
                break;

            case "3":
                console.log("--INVENTARIO--");

                


                inventario.forEach(p => {
                    let info = `${p.nombre} - Stock: ${p.stock} - Precio: ${p.precio.toFixed(2)}`;
                    if (p.marca) {
                        info += ` - Marca: ${p.marca}`;
                    };
                    console.log(info);
                });
                
                break;

            case "4":
                console.log("--HISTORIAL--");

                ventas.forEach(v =>
                    console.log(`Cliente: ${v.cliente}, Producto: ${v.producto.nombre}, Cantidad: ${v.cantidad}, Total: ${v.total.toFixed(2)}`)
                );

                
                break;

            case "5":
                console.log("Saliendo");
                return;

            default:
                console.log("Opcion invalida");
                break;
        }
    };

};

menu();
