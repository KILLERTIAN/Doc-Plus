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
router.get('/:uid', getHospitalById);

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
router.put('/:uid', updateHospitalById);

// Delete a hospital by ID
router.delete('/:uid', deleteHospitalById);

export default router;
