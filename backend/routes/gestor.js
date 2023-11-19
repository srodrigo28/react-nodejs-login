import express from "express";

// import { getGestor } from '../controllers/gestorController.js'
import {addGestor, getGestor, getOneGestor, updateGestor, deleteGestor} from '../controllers/gestorController.js'

const router = express.Router();

router.get("/gestores", getGestor);
router.get("/gestores/:id", getOneGestor);
router.put("/gestores/:id", updateGestor);
router.delete("/gestores/:id", deleteGestor);

router.post("/gestores", addGestor);

export default router;