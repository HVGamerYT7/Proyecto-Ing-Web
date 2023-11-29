const pool = require('../config');

const obtenerProductosPorCategoria = async (req: any,res:any) => {
    try {
        const {categoria} = req.body;
        const result = await pool.query('SELECT * FROM productos WHERE categoria = $1', [categoria]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const mostrarProductos = async (req:any,res:any) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        const data = result.rows;
        res.json(data);
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const buscarProducto = async (req: any,res:any) => {
    try {
        const {nombre} = req.query;
        const result = await pool.query('SELECT * FROM productos WHERE nombre = $1', [nombre]);
        res.status(200).json({ message: 'Producto Econtrado con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const eliminarProducto = async (req:any,res:any) => {
    try {
        const {id} = req.query;
        const result = await pool.query('DELETE FROM productos WHERE id = $1', [id]);
        res.status(200).json({ message: 'Producto Eliminado con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const cambiarNombreProducto = async (req:any, res: any) => {
    try {
        const {id,nuevoNombre} = req.quer;
        const result = await pool.query('UPDATE productos SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
        res.status(200).json({ message: 'nombre del producto cambiado con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const cambiarPrecioProducto = async (req:any, res: any) => {
    try {
        const {id,nuevoPrecio} = req.quer;
        const result = await pool.query('UPDATE productos SET precio = $1 WHERE id = $2', [nuevoPrecio, id]);
        res.status(200).json({ message: 'cambio de precio con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const cambiarDescripcionProducto = async (req: any, res: any) => {
    try {
        const {id ,nuevaDescripcion} = req.quer;
        const result = await pool.query('UPDATE productos SET descripcion = $1 WHERE id = $2', [nuevaDescripcion, id]);
        res.status(200).json({ message: 'cambio de descripcion con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const cambiarCantidadProducto = async (req: any, res: any) => {
    try {
        const {id,nuevaCantidad} = req.quer;
        const result = await pool.query('UPDATE productos SET cantidad = $1 WHERE id = $2', [nuevaCantidad, id]);
        res.status(200).json({ message: 'cambio de cantidad con éxito', data: result.rows });
        
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const cambiarCategoriaProducto = async (req: any, res: any) => {
    try {
        const {id,nuevaCategoria} = req.quer;
        const result = await pool.query('UPDATE productos SET categoria = $1 WHERE id = $2', [nuevaCategoria, id]);
        res.status(200).json({ message: 'cambio de categoria con éxito', data: result.rows });
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');        
    }
};

const agregarProducto = async (req: any, res: any) => 
{
    try{
        const {nombre,precio,descripcion,cantidad,categoria} = req.quer;
        const result = await pool.query('INSERT INTO productos (nombre, precio, descripcion, cantidad, categoria) VALUES ($1, $2, $3, $4, $5)', [nombre, precio, descripcion, cantidad, categoria]);
        res.status(200).json({ message: 'Producto agregado con éxito', data: result.rows });
    }
    catch(error)
    {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports =
{
    obtenerProductosPorCategoria,
    mostrarProductos,
    buscarProducto,
    eliminarProducto,
    cambiarNombreProducto,
    cambiarPrecioProducto,
    cambiarDescripcionProducto,
    cambiarCantidadProducto,
    cambiarCategoriaProducto,
    agregarProducto
}





