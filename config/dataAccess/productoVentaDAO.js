const { where } = require('sequelize');
const { ProductoVenta } = require('../../models'); 

class productoVentaDAO {
    constructor() { }

    async crearProductoVenta(idventa, idproducto, cantidadvendida, subtotal, precioventa) {
        try {
            const productoVenta = await ProductoVenta.create({ idventa, idproducto, cantidadvendida, subtotal, precioventa });
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoVenta() {
        try {
            const productoVenta = await ProductoVenta.findAll();
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoVentaPorId(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async actualizarProductoVenta(id, idventa, idproducto, cantidadvendida, subtotal, precioventa) {
        try {
            await ProductoVenta.update({ idventa, idproducto, cantidadvendida, subtotal, precioventa }, { where: { id } });
            const productoVenta = await ProductoVenta.findByPk(id);
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async elliminarProductoVentaPorId(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);
            if (!productoVenta) {
                throw new Error('No se encontro el producto venta a eliminar');
            }
            productoVenta.destroy();
            return 'El producto venta se ha eliminado con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new productoVentaDAO();
