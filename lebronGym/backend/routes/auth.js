const express = require ('express'); // importa express que uso para crear rutas
const router = express.Router(); //mini servidor para agrupar rutas
const db = require('../db'); //importa la conexion a la base de datos


 //EndPoint de login

 router.post("/login", async (req, res) => { //define la ruta para el login, recibe los datos del usuario y contraseña por el body de la peticion
    const { usuario, password } = req.body; //extrae el nombre y la contraseña del body de la peticion, osea extraigo los datos enviados desde react
 

 try{ //busca usuario en la base de datos
    const [rows] = await db.query("SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
        [usuario, password]
    );

    if (rows.length > 0) { // si encontro al menos un usuario correcto
        const user = rows[0]; //toma el primer usuario encontrado

        res.json({
            id: user.id,
            usuario: user.usuario,
            rol: user.rol
        }); //devuelve los datos al frontend

    } else{
        res.status(401).json({ error: "Usuario o contraseña incorrectos"}); // si no encontro ningun usuario devuelve error 401 (no autorizadp)
    } 
    
    }catch (error){// por si falla algo
        console.error("Error en el login:", error);
        res.status(500).json({ error: "Error en el servidor"}); //respuesta al cliente 500 error interno
 }
});
 module.exports = router; //exporta la ruta para usarla en index.js