import express from "express";
import cors from "cors";

import usuariosRoutes from "./routes/usuarios.js";
import authRoutes from "./routes/auth.js";
import sociosRoutes from "./routes/socios.routes.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

app.use("/auth", authRoutes);

app.use("/api/socios", sociosRoutes);

app.get("/", (req,res)=>{
    res.send("Backend funcionando");
});

const server = app.listen(PORT, ()=>{

    console.log(
        `Servidor corriendo en http://localhost:${PORT}`
    );

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