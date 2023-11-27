"use strict";
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'web',
    password: 'cuadrupedo123',
    port: 5432, // Puerto predeterminado de PostgreSQL
});
module.exports = pool;
