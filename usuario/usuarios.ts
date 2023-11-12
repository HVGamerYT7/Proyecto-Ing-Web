const pool = require('../config');

export const obtenerUsuarios = () => {
  pool.query('SELECT * FROM usuarios', (error:any, results:any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(results.rows);
    }
    pool.end();
  });
};

export const buscarUsuario = (nombre: string) => {
  pool.query(`SELECT * FROM usuarios WHERE nombre = '${nombre}'`, (error:any, results:any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(results.rows);
    }
    pool.end();
  });
};

export const eliminarUsuario = (id: number) => {
  pool.query(`DELETE FROM usuarios WHERE id = ${id}`, (error:any, results:any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Usuario con id ${id} eliminado exitosamente`);
    }
    pool.end();
  });
};

export const cambiarNombreUsuario = (id: number, nuevoNombre: string) => {
  pool.query(`UPDATE usuarios SET nombre = '${nuevoNombre}' WHERE id = ${id}`, (error:any, results:any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Nombre de usuario con id ${id} cambiado exitosamente`);
    }
    pool.end();
  });
};

export const cambiarCorreo = (id: number, nuevoCorreo: string) => {
  pool.query(`UPDATE usuarios SET correo = '${nuevoCorreo}' WHERE id = ${id}`, (error:any, results:any) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Correo de usuario con id ${id} cambiado exitosamente`);
    }
    pool.end();
  });
};







