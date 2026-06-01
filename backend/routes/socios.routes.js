import express from "express";

import {
    obtenerSocios,
    crearSocio,
    eliminarSocio,
    actualizarSocio
} from "../controllers/socios.controller.js";

const router=express.Router();

router.get("/",obtenerSocios);
router.post("/",crearSocio);
router.delete("/:id", eliminarSocio);
router.put("/:id", actualizarSocio);

export default router;