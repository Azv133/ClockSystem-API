const mysql = require('mysql2/promise'); 

const config = {
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    host: process.env.MYSQL_DB_SERVER,
    database: process.env.MYSQL_DB_DATABASE,
    port: process.env.MYSQL_DB_PORT,
};

async function query(sql, values) {
    const pool = mysql.createPool(config);
    const connection = await pool.getConnection();
    try {
        const [results] = await connection.query(sql, values);
        return results;
    } finally {
        connection.release();
        pool.end();
    }
}

module.exports = {
    query,
};