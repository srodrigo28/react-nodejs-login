import express from "express";

import { getUsers, addUser, deleteUser, updateUser, getOneUser, usersLogin } from "../controllers/usersController.js";

const router = express.Router();

router.post("/login", usersLogin);

router.get("/users", getUsers);
router.post("/register", addUser);

router.get("/users/:id", getOneUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

export default router;