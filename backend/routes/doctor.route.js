import express from "express";
import {
  createDoctor,
  getDoctor,
  getDoctors,
  deleteDoctor,
  updateDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/single/:id", getDoctor);
router.get("/", getDoctors);
router.post("/", createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
