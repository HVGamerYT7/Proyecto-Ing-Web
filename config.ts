const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'WEb',
  password: 'T1toM4fla',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

module.exports = pool;


