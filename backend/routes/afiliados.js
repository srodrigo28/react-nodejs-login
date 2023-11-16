import express from "express";

import { getUsers, addUser, deleteUser, updateUser } from "../controllers/userController.js"

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;