import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/patient.controller.js";

const router = express.Router();

// Use Firebase UID instead of patient ID in routes
router.get("/:uid", getUser); // Fetch user by UID
router.get("/", getUsers); // Fetch all users
router.post("/", createUser); // Create a new user
router.put("/:uid", updateUser); // Update user by UID
router.delete("/:uid", deleteUser); // Delete user by UID

export default router;
