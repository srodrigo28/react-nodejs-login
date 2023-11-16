import express from "express";

import { getUsers, addUser, deleteUser, updateUser, usersLogin } from "../controllers/userController.js"

const router = express.Router();

router.post("/login", usersLogin);
router.get("/users", getUsers);
router.post("/register", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;