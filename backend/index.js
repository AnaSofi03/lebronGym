const express = require("express"); // Importa Express para crear el servidor backend
const cors = require("cors"); // Importa CORS para permitir conexión con el frontend

const app = express(); // Crea la aplicación Express

// Define el puerto del servidor (usa variable de entorno o 3001 por defecto)
const PORT = process.env.PORT || 3001;

// =========================
// Middlewares
// =========================

// Permite solicitudes desde otros dominios (ej: React frontend)
app.use(cors());

// Permite recibir y procesar datos JSON en req.body
app.use(express.json());

// =========================
// Rutas
// =========================

// Conecta la ruta /usuarios con el archivo routes/usuarios.js
app.use("/usuarios", require("./routes/usuarios"));
app.use("/auth", require("./routes/auth")); // Ruta para autenticación (login)
// Ruta principal para probar servidor
app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente");
});

// =========================
// Iniciar servidor
// =========================

const server = app.listen(PORT, () => {

  // Muestra mensaje cuando el servidor inicia correctamente
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

});

// =========================
// Manejo de errores del servidor
// =========================

server.on("error", (err) => {

  // Si el puerto ya está ocupado
  if (err.code === "EADDRINUSE") {

    console.error(
      `El puerto ${PORT} ya está en uso. Cierra el proceso que lo ocupa o usa otro puerto.`
    );

  } else {

    // Otros errores del servidor
    console.error("Error al iniciar el servidor:", err);

  }

  // Finaliza proceso si ocurre error crítico
  process.exit(1);
});

// =========================
// Manejo global de errores
// =========================

// Captura errores normales no controlados
process.on("uncaughtException", (err) => {

  console.error("Error no capturado:", err);

});

// Captura promesas rechazadas sin catch
process.on("unhandledRejection", (reason) => {

  console.error("Promesa no manejada:", reason);

});