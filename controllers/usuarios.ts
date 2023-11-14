const pool = require('../config')

const obtenerUsuarios = async(req:any,res:any) => {
    try {
      const result = await pool.query('SELECT * FROM usuarios');
      const data = result.rows;
      res.json(data);
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    }
}

const buscarUsuario = async(req:any,res:any) => {
    try
    {
      const {nombre} = req.query;
      const result = await pool.query('SELECT * FROM usuarios WHERE nombre = $1',[nombre]);
      res.status(200).json({ message: 'Usuario Econtrado con éxito', data: result.rows });
    }
    catch(error)
    {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    }
}

const eliminarUsuario = async (req: any,res:any) => {
  try
  {
    const {id} = req.query;
    const result = await pool.query('DELETE FROM usuarios WHERE id = $1',[id]);
    res.status(200).json({ message: 'Usuario Eliminado con éxito', data: result.rows });

  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const cambiarNombreUsuario = async (req:any, res:any) => {
  try{
    const { nuevoNombre, id } = req.query;
    const result = await pool.query('UPDATE usuarios SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
  }
  catch(error){
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const cambiarCorreo = async (req: any, res: any) => {
  try
  {
    const {id,nuevoCorreo} = req.query;
    const result = await pool.query('UPDATE usuarios SET correo = $1 WHERE id = $2', [id, nuevoCorreo]);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

//encriptar contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

const cambiarContrasena = async (req: any, res: any) => 
{
  try
  {
    const { id, contrasena } = req.query;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
    const result = await pool.query('UPDATE usuarios SET contrasena = $1 WHERE id_usuario = $2', [hashedPassword, id]);
    res.status(200).json({ message: 'Contraseña actualizada con éxito', data: result.rows });
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}


const verificarCredenciales = async (req: any, res: any) =>
{
  try
  {
    const { correo, contrasenia } = req.body;
    const hashedPassword = await bcrypt.hash(contrasenia, 10);
    const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1 AND contrasena = $2', [correo, hashedPassword]);
    if (result.rows.length === 0) {
      res.status(401).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(200).json({ message: 'Credenciales válidas' });
    }
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}


module.exports =
{
  obtenerUsuarios,
  buscarUsuario,
  eliminarUsuario,
  cambiarNombreUsuario,
  cambiarCorreo,
  cambiarContrasena,
  verificarCredenciales
}
