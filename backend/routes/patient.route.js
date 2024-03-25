import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.get("/single/:id", getUser);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

