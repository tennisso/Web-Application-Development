const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Minumessi10",
    database: "testWAD",
    host: "localhost",
    port: "5432"
});

module.exports = pool;