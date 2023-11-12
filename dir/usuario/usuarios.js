"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambiarCorreo = exports.cambiarNombreUsuario = exports.eliminarUsuario = exports.buscarUsuario = exports.obtenerUsuarios = void 0;
const pool = require('../config');
const obtenerUsuarios = () => {
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
exports.obtenerUsuarios = obtenerUsuarios;
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
exports.buscarUsuario = buscarUsuario;
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
exports.eliminarUsuario = eliminarUsuario;
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
exports.cambiarNombreUsuario = cambiarNombreUsuario;
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
exports.cambiarCorreo = cambiarCorreo;
