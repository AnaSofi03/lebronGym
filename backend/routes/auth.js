

import express from "express";
import db from "../db.js";

const router = express.Router();

// EndPoint de login
router.post("/login", async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const [rows] = await db.query(
            "SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
            [usuario, password]
        );

        if (rows.length > 0) {
            const user = rows[0];

            res.json({
                id: user.id,
                usuario: user.usuario,
                rol: user.rol
            });

        } else {
            res.status(401).json({
                error: "Usuario o contraseña incorrectos"
            });
        }

    } catch (error) {
        console.error("Error en el login:", error);

        res.status(500).json({
            error: "Error en el servidor"
        });
    }
});

export default router;