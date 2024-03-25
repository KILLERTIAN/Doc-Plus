// pdinteraction.route.js

import express from "express";
import {
  createInteraction,
  getInteraction,
  getInteractions,
  updateInteraction,
  deleteInteraction,
} from "../controllers/pdinteraction.controller.js";

const router = express.Router();

router.get("/", getInteractions);
router.get("/:id", getInteraction);
router.post("/", createInteraction);
router.put("/:id", updateInteraction);
router.delete("/:id", deleteInteraction);

export default router;
