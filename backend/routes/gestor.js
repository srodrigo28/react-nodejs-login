import express from "express";

import {addGestor, getGestor, getOneGestor, updateGestor, deleteGestor} from '../controllers/gestorController'

const router = express.Router();

router.get("/gestores", getGestor);
router.post("/gestor", addGestor);
router.get("/gestor/:id", getOneGestor);
router.put("/update/:id", updateGestor);
router.delete("/delete/:id", deleteGestor);

export default router;