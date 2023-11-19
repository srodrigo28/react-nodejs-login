import express from "express";

import { addAfiliado, getAfiliados, getAfiliadosCount } from "../controllers/afiliadoController.js"

const router = express.Router();

router.get("/afiliados", getAfiliados);
router.post("/afiliadosG", getAfiliadosCount);
router.post("/afiliados", addAfiliado);
// router.put("/update/:id", updateUser);
// router.delete("/delete/:id", deleteUser);

export default router;