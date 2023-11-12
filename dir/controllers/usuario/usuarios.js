"use strict";
const obtenerUsuarios = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results.rows);
        }
        pool.end();
    });
};
const buscarUsuario = (nombre) => {
    pool.query(`SELECT * FROM usuarios WHERE nombre = '${nombre}'`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results.rows);
        }
        pool.end();
    });
};
const eliminarUsuario = (id) => {
    pool.query(`DELETE FROM usuarios WHERE id = ${id}`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(`Usuario con id ${id} eliminado exitosamente`);
        }
        pool.end();
    });
};
const cambiarNombreUsuario = (id, nuevoNombre) => {
    pool.query(`UPDATE usuarios SET nombre = '${nuevoNombre}' WHERE id = ${id}`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(`Nombre de usuario con id ${id} cambiado exitosamente`);
        }
        pool.end();
    });
};
const cambiarCorreo = (id, nuevoCorreo) => {
    pool.query(`UPDATE usuarios SET correo = '${nuevoCorreo}' WHERE id = ${id}`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(`Correo de usuario con id ${id} cambiado exitosamente`);
        }
        pool.end();
    });
};
module.exports =
    {
        obtenerUsuarios,
        buscarUsuario,
        eliminarUsuario,
        cambiarNombreUsuario,
        cambiarCorreo
    };
