"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarUsuario = exports.obtenerUsuarios = void 0;
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
