const { where } = require('sequelize');
const { Producto } = require('../../models'); 


class productoDAO {
    constructor() { }

    async crearProducto(nombre, precio, cantidad) {
        try {
            const producto = await Producto.create({ nombre, precio, cantidad });
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProducto() {
        try {
            const productos = await Producto.findAll();
            return productos;
        } catch (error) {
            throw error;
        }

    }

    async obtenerProductoPorId(id) {
        try {
            const producto = await Producto.findByPk(id);
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async actualizarProducto(id, nombre, precio, cantidad) {
        try {
            await Producto.update({ nombre, precio, cantidad }, { where: { id } });
            const productos = await Producto.findByPk(id);
            return productos;
        } catch (error) {
            throw error;
        }
    }


    async eliminarProductoPorId(id) {
        try {
            const producto = await Producto.findByPk(id);
            if(!producto){
                throw new Error ('No se encontro el producto a eliminar');
            }
            producto.destroy();
            return 'El producto se ha eliminado con exito'
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new productoDAO();