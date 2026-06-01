import mysql from "mysql2/promise";

const pool = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gimnasio"
});

console.log("Base de datos conectada");

export default pool;