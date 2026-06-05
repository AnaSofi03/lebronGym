import express from "express";
import cors from "cors";

import sociosRoutes from "./routes/socios.routes.js";

const app = express(); //crea el servidor

app.use(cors()); // permite que el front pueda conectarse con el backend


app.use(express.json()); //perimite recibir json

app.use("/api/socios", sociosRoutes); //conecta las rutas


app.listen(4000, () => {
    console.log("Servidor activo");
});