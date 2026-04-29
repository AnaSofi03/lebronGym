const mysql = require('mysql2'); //trae la libreria que permite conectaar node con mysql

//Crea el pool de conexiones: multiples conexiones al mismo tiempo
const pool = mysql.createPool({  
    host: 'localhost', //direccion del servidor de mysql
    user: 'root', //usuario de la base de datos
    password:'', //contraseña del usuario de la base de datos
    database: 'gimnasio'// nombre de la base de datos
});
module.exports = pool.promise(); //exporta el pool de conexiones para usarlo en otros archivos