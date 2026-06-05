import express from "express";

import {
    obtenerSocios,
    crearSocio,
    eliminarSocio,
    actualizarSocio,
    cambiarEstado
} from "../controllers/socios.controller.js";

const router=express.Router();

router.get("/",obtenerSocios);
router.post("/",crearSocio);
router.delete("/:id", eliminarSocio);
router.put("/:id", actualizarSocio);

router.put("/:id/estado", cambiarEstado);
//router.put("/:id/estado",  cambiarEstado);

export default router;