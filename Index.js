// importar los dao e interactuar con el 

const productoDAO = require('./config/dataAccess/productoDAO');
const productoVentaDAO = require('./config/dataAccess/productoVentaDAO');
const ventaDAO = require('./config/dataAccess/ventaDAO');

async function pruebas() {
    try {

        // Crear una venta
        const nuevaVenta = await ventaDAO.crearVenta(100.50, 16.08);
        console.log('Venta creada:', nuevaVenta);

        // Obtener todas las ventas
        const ventas = await ventaDAO.obtenerVentas();
        console.log('Lista de Ventas:', ventas);

        // Crear un producto
        const nuevoProducto = await productoDAO.crearProducto('Laptop', 15000, 5);
        console.log('Producto creado con exito:', nuevoProducto);

        // Obtener todos los productos
        const productos = await productoDAO.obtenerProducto();
        console.log('Lista de Productos:', productos);

        // Crear un producto venta
        const nuevoProductoVenta = await productoVentaDAO.crearProductoVenta(nuevaVenta.id, nuevoProducto.id, 2, 30000, 15000);
        console.log('Producto Venta creado con exito:', nuevoProductoVenta);

        // Obtener todos los productos vendidos
        const productosVendidos = await productoVentaDAO.obtenerProductoVenta();
        console.log('Lista de Productos Vendidos:', productosVendidos);

    } catch (error) {
        console.error('Error en la prueba:', error);
    }
}

pruebas();
