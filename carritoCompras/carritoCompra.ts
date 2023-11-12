const pool = require('../config');

export const agregarCarritoCompras = async (id_producto: string, id_usuario: number) => {
    try {
        const result = await pool.query('INSERT INTO carritocompras (id_producto, id_usuario) VALUES ($1, $2)', [id_producto, id_usuario]);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const eliminarCarritoCompras = async (id_producto: string, id_usuario: number) => {
    try {
        const result = await pool.query('DELETE FROM carritocompras WHERE id_producto = $1 and id_usuario = $2', [id_producto,id_usuario]);
        return result;
    } catch (error) {
        console.error(error);
    }
};


export const modificarCantidadProducto = async (id_producto: string, id_usuario: number,cantidadProducto : number) => {
    try {
        const result = await pool.query('UPDATE carritocompras SET cantidadproducto = $3 WHERE id_producto = $1 and id_producto = $2', [id_producto, id_usuario,cantidadProducto]);
        return result;
    } catch (error) {
        console.error(error);
    }
};


