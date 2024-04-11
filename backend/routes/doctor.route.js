import express from "express";
import {
  createDoctor,
  getDoctor,
  getDoctors,
  deleteDoctor,
  updateDoctor,
} from "../controllers/doctor.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.get("/single/:id", getDoctor);
router.get("/", getDoctors);
router.route("/").post(
  upload.fields([
      {
          name: "avatar",
          maxCount: 1
      }
      
  ]),createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;