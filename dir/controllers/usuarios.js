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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require('../config');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : 'secretkey';
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10; // Define the saltRounds variable
const crearCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.query;
    try {
        const result = yield pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        const usuariosEncontrados = result.rows;
        if (usuariosEncontrados.length > 0) {
            res.status(400).json({ message: 'Usuario ya está registrado' });
        }
        else {
            const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
            yield pool.query('INSERT INTO usuarios (id, contrasenia) VALUES ($1, $2)', [id, hashedPassword]);
            res.status(200).json({ message: 'Usuario creado con éxito' });
        }
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
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
const cambiarContrasena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, contrasena } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(contrasena, saltRounds);
        console.log(hashedPassword);
        const result = yield pool.query('UPDATE usuarios SET contrasenia = $1 WHERE id = $2', [hashedPassword, id]);
        res.status(200).json({ message: 'Contraseña actualizada con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const iniciarSesion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body || !req.body.id || !req.body.contrasenia) {
        res.status(400).send({
            message: 'Error: No se han recibido todos los datos necesarios',
        });
        return;
    }
    const { id, contrasenia } = req.body;
    const usuario = yield pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (usuario.rows.length === 0) {
        res.status(404).send({
            message: 'El usuario no existe',
        });
        return;
    }
    const hashedPassword = usuario.rows[0].contrasenia;
    if (!bcrypt_1.default.compareSync(contrasenia, hashedPassword)) {
        res.status(401).send({
            message: 'Contraseña incorrecta',
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ username: usuario.rows[0].username }, SECRET_KEY, { expiresIn: '24h' });
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
});
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
    };
