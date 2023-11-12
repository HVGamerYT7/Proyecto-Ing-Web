const pool = require('../config');

export const obtenerProductosPorCategoria = async (categoria: string) => {
    try {
        const result = await pool.query('SELECT * FROM productos WHERE categoria = $1', [categoria]);
        return result.rows;
    } catch (error) {
        console.error(error);
    }
};


export const buscarProducto = async (nombre: string) => {
    try {
        const result = await pool.query('SELECT * FROM productos WHERE nombre = $1', [nombre]);
        return result.rows;
    } catch (error) {
        console.error(error);
    }
};

export const eliminarProducto = async (id: string) => {
    try {
        const result = await pool.query('DELETE FROM productos WHERE id = $1', [id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};

const cambiarNombreProducto = async (id: string, nuevoNombre: string) => {
    try {
        const result = await pool.query('UPDATE productos SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};

const cambiarPrecioProducto = async (id: string, nuevoPrecio: number) => {
    try {
        const result = await pool.query('UPDATE productos SET precio = $1 WHERE id = $2', [nuevoPrecio, id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};

const cambiarDescripcionProducto = async (id: string, nuevaDescripcion: string) => {
    try {
        const result = await pool.query('UPDATE productos SET descripcion = $1 WHERE id = $2', [nuevaDescripcion, id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};

export const cambiarCantidadProducto = async (id: string, nuevaCantidad: number) => {
    try {
        const result = await pool.query('UPDATE productos SET cantidad = $1 WHERE id = $2', [nuevaCantidad, id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};

export const cambiarCategoriaProducto = async (id: string, nuevaCategoria: string) => {
    try {
        const result = await pool.query('UPDATE productos SET categoria = $1 WHERE id = $2', [nuevaCategoria, id]);
        return result.rowCount;
    } catch (error) {
        console.error(error);
    }
};







