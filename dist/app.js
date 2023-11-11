
const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'test'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error al conectar con BD' + err.stack);
        return;
    }
    console.log('Conectado con BD' + connection.threadId);
});
const configuracion = {
    hostname: '127.0.0.1',
    port: 3000
};
app.listen(configuracion, () => {
    console.log(`Servidor corriendo en http://localhost:${configuracion.port}`);
});

// Agrega esta ruta para recibir los datos de inicio de sesión
app.post("/login", (req, res) => {
    const { email, contrasenia } = req.body;
    connection.query('SELECT * FROM usuarios WHERE email = ? AND contrasenia = ?', [email, contrasenia], function (err, results, fields) {
        if (err) {
            console.error('Error al realizar la consulta' + err.stack);
            res.send(false);
            return;
        }
        if (results.length > 0) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
});


