const { where } = require('sequelize');
const { Venta } = require('../../models'); 


class ventaDAO {
    constructor() { }

    async crearVenta(total, iva) {
        try {
            const venta = await Venta.create({ total, iva });
            return venta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerVentas() {
        try {
            const ventas = await Venta.findAll();
            return ventas;
        } catch (error) {
            throw error;
        }
    }

    async obtenerVentaPorId(id) {
        try {
            const venta = await Venta.findByPk(id);
            return venta;
        } catch (error) {
            throw error;
        }
    }

    async actualizarVenta(id, total, iva) {
        try {
            await Venta.update({ total, iva }, { where: { id } });
            const venta = await Venta.findByPk(id);
            return venta;
        } catch (error) {
            throw error;
        }
    }

    async elliminarVentaPorId(id) {
        try {
            const venta = await Venta.findByPk(id);
            if (!venta) {
                throw new Error('No se encontro la venta a eliminar');
            }
            venta.destroy();
            return 'La venta se ha eliminado con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ventaDAO();
