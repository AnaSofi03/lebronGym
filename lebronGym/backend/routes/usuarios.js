const express = require('express'); //importa el framework express para crear el servidor
const router = express.Router();//creas una ruta, es como un mini servidor solo para usuarios
const pool = require('../db'); //importa la conexion con la base de datos

//GET /usuarios -- obtener todos los usuaruios
router.get("/", async (req, res) =>{
    try {//intenta ejecutar la consulta sin que se rompa la app
        const [rows] = await pool.query("SELECT * FROM usuarios");// consulta a la base de datos para traer a todos los usuarios
        res.json(rows);//devuelve los datos al cliiente
    } catch (error) {// si hay error
        console.error("Error al obtener usuarios:", error);//muestra el error en consola

        // si la base de datos no esta disponible, devuelve el error 503
        if (error.code === 'ECONNREFUSED' || error.code === 'ECCONNRESET') {//detecta si la base de datos  no esta encendida , se cayo la conexion
            return res.status(503).json({ error: "Servicio de base de datos no disponible."});
        }
        res.status(500).json({ error: "Error al obtener usuarios." });
    }
});
module.exports = router; //exporta la ruta para usarla en index.js