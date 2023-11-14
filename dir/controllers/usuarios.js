"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pool = require('../config');
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM usuarios');
        const data = result.rows;
        res.json(data);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const buscarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.query;
        const result = yield pool.query('SELECT * FROM usuarios WHERE nombre = $1', [nombre]);
        res.status(200).json({ message: 'Usuario Econtrado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const result = yield pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        res.status(200).json({ message: 'Usuario Eliminado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarNombreUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nuevoNombre, id } = req.query;
        const result = yield pool.query('UPDATE usuarios SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
        res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarCorreo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevoCorreo } = req.query;
        const result = yield pool.query('UPDATE usuarios SET correo = $1 WHERE id = $2', [id, nuevoCorreo]);
        res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
//encriptar contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cambiarContrasena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, contrasena } = req.query;
        const hashedPassword = yield bcrypt.hash(contrasena, saltRounds);
        const result = yield pool.query('UPDATE usuarios SET contrasena = $1 WHERE id_usuario = $2', [hashedPassword, id]);
        res.status(200).json({ message: 'Contraseña actualizada con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const verificarCredenciales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, contrasenia } = req.body;
        const hashedPassword = yield bcrypt.hash(contrasenia, 10);
        const result = yield pool.query('SELECT * FROM usuarios WHERE correo = $1 AND contrasena = $2', [correo, hashedPassword]);
        if (result.rows.length === 0) {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
        else {
            res.status(200).json({ message: 'Credenciales válidas' });
        }
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        obtenerUsuarios,
        buscarUsuario,
        eliminarUsuario,
        cambiarNombreUsuario,
        cambiarCorreo,
        cambiarContrasena,
        verificarCredenciales
    };
