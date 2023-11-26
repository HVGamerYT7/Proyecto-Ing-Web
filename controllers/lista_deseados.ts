const pool = require('../config');

const eliminarProductosLD = async (req:any, res:any) => {
    try{
        const {id_producto,id_usuario} = req.quer;
        const resul = await pool.query('DELETE FROM listaDeseados WHERE id_usuario = $1 AND id_producto = $2',[id_usuario,id_producto]); 
        const data = resul.rows;
        resul.json(data)
    }
    catch(error)
    {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}

const agregarProductoLD = async (req: any, res: any) => {
    try{
        const {id_producto,id_usuario} = req.quer;
        const resul = await pool.query('INSERT INTO listaDeseados id_producto = $1, id_usuario = $2',[id_producto,id_usuario]); 
        const data = resul.rows;
        resul.json(data)
    }
    catch(error)
    {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const mostrarProductosLD = async (req:any, res:any) => 
{
    try
    {
        const {id_usuario} = req.quer;
        const resul = await pool.query('SELECT * FROM usuarios inner join listadeseados on usuarios.id = listadeseados.id_usuarios inner join productos on listadeseados.id_producto = productos.id WHERE id_usuario = $1',[id_usuario]); 
        const data = resul.rows;
        resul.json(data)
    }
    catch(error)
    {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports =
{
    eliminarProductosLD,
    agregarProductoLD,
    mostrarProductosLD
}
