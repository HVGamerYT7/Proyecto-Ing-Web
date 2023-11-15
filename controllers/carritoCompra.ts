const pool = require('../config');

const agregarCarritoCompras = async (req:any, res: any) => {
    try {
        const {id_producto,id_usuario} = req.quer;
        const result = await pool.query('INSERT INTO carritocompras (id_producto, id_usuario) VALUES ($1, $2)', [id_producto, id_usuario]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const eliminarCarritoCompras = async (req: any, res: any) => {
    try {
        const {id_producto,id_usuario} = req.quer;
        const result = await pool.query('DELETE FROM carritocompras WHERE id_producto = $1 and id_usuario = $2', [id_producto,id_usuario]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const modificarCantidadProducto = async (req: any, res: any) => {
    try {
        const {id_producto,id_usuario,cantidadProductos} = req.quer;
        const result = await pool.query('UPDATE carritocompras SET cantidadproducto = $3 WHERE id_producto = $1 and id_producto = $2', [id_producto, id_usuario,cantidadProductos]);
        return result;
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const mostrarCarrito = async (req: any, res: any) => {
    try {
        const { id_usuario } = req.query;
        const result = await pool.query('SELECT * FROM usuarios inner join carritocompras on usuarios.id = carritocompras.id_usuario inner join productos on carritocompras.idproducto = productos.id WHERE id_usuario = $1', [id_usuario]);
        res.status(200).json({ message: 'Carrito de compras', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports =
{
    agregarCarritoCompras,
    eliminarCarritoCompras,
    modificarCantidadProducto,
    mostrarCarrito
}
