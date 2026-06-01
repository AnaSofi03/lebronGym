import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET /usuarios -- obtener todos los usuarios
router.get("/", async (req, res) => {

    try {
        const [rows] = await pool.query(
            "SELECT * FROM usuarios"
        );

        res.json(rows);

    } catch (error) {

        console.error("Error al obtener usuarios:", error);

        if (
            error.code === "ECONNREFUSED" ||
            error.code === "ECONNRESET"
        ) {
            return res.status(503).json({
                error: "Servicio de base de datos no disponible."
            });
        }

        res.status(500).json({
            error: "Error al obtener usuarios."
        });
    }
});

export default router;