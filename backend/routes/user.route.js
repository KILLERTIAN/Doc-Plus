import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/single/:id", getUser);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
// import express from 'express';
// import { getUsers } from '../controllers/user.controller.js';

// const router = express.Router();

// router.get('/', getUsers);

// export default router;
