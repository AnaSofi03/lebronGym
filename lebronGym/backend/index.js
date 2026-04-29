const express = require("express"); // importa express (framework de backend)
const cors = require("cors"); // permite conexiones con el frontend
const app = express(); //crea la aplicacion
const PORT = process.env.POORT || 3001; // Puerto del servidor


//middlewares 
app.use(cors()); //permite peticiones desde otros dominios
app.use(express.json()); // permite recibir datos en formato json


//rutas

app.use("/usuarios", require("./routes/usuarios"));

//levanta el servidor
const server = app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto http://localhost:${PORT}');
});  


//manejo de errores
//error si el puerto esta ocupadp
server.on('error', (err) =>{
    if(err.code === 'EADDRINUSE') {
        console.error('El puerto ${PORT} ya está en uso. Cierra el proceso que lo ocupa o define otra variable PORT.GRACIAS!!!');
    }else{
        console.error('Error al iniciar el servidor:', err);
    }
    process.exit(1); //sale del proceso
})

//error global (errores normale)
process.on('uncaughtException', (err) => {
    console.error('Error no capturado:', err);
});

//Error global (promesas mal manejadas)
process.on('unhandledRejection', (reason) =>{
    console.error("Promesa no manejada:", reason);
});