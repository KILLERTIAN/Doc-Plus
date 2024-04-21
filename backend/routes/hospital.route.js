import express from 'express';
import {
  createHospital,
  getHospitalById,
  getAllHospitals,
  updateHospitalById,
  deleteHospitalById,
} from '../controllers/hospital.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = express.Router();

// Get all hospitals
router.get('/', getAllHospitals);

// Get a specific hospital by ID
router.get('/:id', getHospitalById);

// Create a new hospital
router.route("/").post(
  upload.fields([
      {
          name: "avatar",
          maxCount: 1
      }
  ]),
  createHospital
);

// Update a hospital by ID
router.put('/:id', updateHospitalById);

// Delete a hospital by ID
router.delete('/:id', deleteHospitalById);

export default router;
