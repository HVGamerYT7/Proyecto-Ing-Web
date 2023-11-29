const pool = require('../config');
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'secretkey';
import bcrypt from 'bcrypt';
const saltRounds = 10; // Define the saltRounds variable


const crearCuenta = async (req: any, res: any) => {
  const { nombre, contrasenia,correo } = req.body;

  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE nombre = $1', [nombre]);
    const usuariosEncontrados = result.rows;

    if (usuariosEncontrados.length > 0) {
      res.status(400).json({ message: 'Usuario ya está registrado' });
    } else {
      // Generar la "sal" utilizando bcrypt.genSalt
      const salt = await bcrypt.genSalt(saltRounds);
      console.log(contrasenia);
      console.log(salt);

      // Cifrar la contraseña utilizando la sal
      const hashedPassword = await bcrypt.hash(contrasenia, salt);

      // Insertar el nuevo usuario en la base de datos
      await pool.query('INSERT INTO usuarios (nombre, contrasenia, correo) VALUES ($1, $2,$3)', [nombre, hashedPassword,correo]);

      res.status(200).json({ message: 'Usuario creado con éxito' });
    }
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
};



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
      const {nombre} = req.body;
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
    const {id} = req.body;
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
    const { nuevoNombre, id } = req.body;
    const result = await pool.query('UPDATE usuarios SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
  }
  catch(error){
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const cambiarCorreo = async (req: any, res: any) => {
  try {
    const { id, correo } = req.body;
    const result = await pool.query('UPDATE usuarios SET correo = $1 WHERE id = $2', [correo, id]);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}

const cambiarContrasena = async (req: any, res: any) => 
{
  try
  {
    const { id, contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
    console.log(hashedPassword);
    const result = await pool.query('UPDATE usuarios SET contrasenia = $1 WHERE id = $2', [hashedPassword, id]);
    res.status(200).json({ message: 'Contraseña actualizada con éxito', data: result.rows });
  }
  catch(error)
  {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
}


const iniciarSesion = async (req: any, res: any) => {
  if (!req.body || !req.body.correo || !req.body.contrasenia) {
    res.status(400).send({
      message: 'Error: No se han recibido todos los datos necesarios',
    });
    return;
  }
  const { correo, contrasenia } = req.body;
  const usuario = await pool.query('SELECT * FROM usuarios WHERE id = $1', [correo]);
  if (usuario.rows.length === 0) {
    res.status(404).send({
      message: 'El usuario no existe',
    });
    return;
  }
  const hashedPassword = usuario.rows[0].contrasenia;
  if (!bcrypt.compareSync(contrasenia, hashedPassword)) {
    res.status(401).send({
      message: 'Contraseña incorrecta',
    });
    return;
  }
  const token = jwt.sign(
    { username: usuario.rows[0].username },
    SECRET_KEY,
    { expiresIn: '30s' },
  );
  res.cookie('token', token, { httpOnly: true }); // Guarda el token como cookie
  res.status(200).send({
    message: 'Inicio de sesión correcto',
    token: {
      token,
      expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(),
    },
    usuario: {
      username: usuario.rows[0].username,
      rol: usuario.rows[0].rol,
    },
  });
}


module.exports =
{
  obtenerUsuarios,
  buscarUsuario,
  eliminarUsuario,
  cambiarNombreUsuario,
  cambiarCorreo,
  cambiarContrasena,
  iniciarSesion,
  crearCuenta
}
