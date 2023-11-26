const pool = require('../config');

const agregarCompra = async(req:any,res:any) => {
    try{
      const {id_producto,id_usuario,fechacompra,cantidadproducto} = req.quer;
      const result = await pool.query('INSERT INTO compras(id_producto, id_usuario, fechacompra, cantidadproducto) VALUES($1, $2, $3, $4)',[id_producto,id_usuario,fechacompra,cantidadproducto]);
      res.status(200).json({ message: 'compra agregada con éxito', data: result.rows });
    }
    catch(error)
    {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    }
  }

const eliminarCompra = async(req:any , res:any) => {
  try{
    const {id_producto,id_usuario,fechacompra} = req.quer;
    const result = await pool.query('INSERT INTO compras(id_producto, id_usuario, fechacompra, cantidadproducto) VALUES($1, $2, $3, $4)',[id_producto,id_usuario,fechacompra]);
    res.status(200).json({ message: 'compra eliminada con éxito', data: result.rows });
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const comprasRealizadas = async(req:any , res:any) => {
  try{
    const {id_usuario} = req.quer;
    const result = await pool.query('SELECT * FROM usuarios inner join compras on usuarios.id = compras.id_usuario inner join productos on compras.id_producto = productos.id WHERE id_usuario = $1',[id_usuario]);
    res.status(200).json({ message: 'compras realizadas por el usuario', data: result.rows });
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

module.exports =
{
  agregarCompra,
  eliminarCompra,
  comprasRealizadas
}