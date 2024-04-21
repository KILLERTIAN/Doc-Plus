import Hospital from '../models/hospital.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createError } from '../utils/createError.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js'; // Import Cloudinary upload function

// Controller function to create a new hospital
const createHospital = asyncHandler(async (req, res) => {
  const {
    firebaseUid,
    name,
    avatar,
    location,
    contact,
    doctors,
    rating,
    rooms,
    facilities,
    specialties,
  } = req.body;

  // Validate required fields
  if (
    [
      firebaseUid,
      name,
      avatar,
      location,
      contact,
      doctors,
      rating,
      rooms,
      facilities,
      specialties,
    ].some((field) => field?.trim() === "")
  ) {
    throw new createError(400, 'All fields are required');
  }

    // Check if avatar file exists
    const avatarLocalPath = req.files?.avatar[0]?.path;
    if (!avatarLocalPath) {
      throw new createError(400, "Avatar file is required");
    }
  
    // Upload avatar to cloudinary
    const avatarCloudinary = await uploadOnCloudinary(avatarLocalPath);
    if (!avatarCloudinary) {
      throw new createError(500, "Error uploading avatar");
    }

  // Create hospital in the database with the Cloudinary URL
  const newHospital = await Hospital.create({
    firebaseUid,
    name,
    avatar: avatarCloudinary.url, // Store Cloudinary URL in the avatar field
    location,
    contact,
    doctors,
    rating,
    rooms,
    facilities,
    specialties,
  });

  // Respond with the newly created hospital
  return res.status(201).json(new ApiResponse(201, newHospital, "Hospital registered successfully"));
});

// Controller function to get all hospitals
const getAllHospitals = asyncHandler(async (req, res) => {
  const hospitals = await Hospital.find();
  res.status(200).json(hospitals);
});

// Controller function to get a single hospital by ID
const getHospitalById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const hospital = await Hospital.findById(id);
  if (!hospital) {
    throw new createError(404, 'Hospital not found');
  }
  res.status(200).json(hospital);
});

// Controller function to update a hospital by ID
const updateHospitalById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedHospitalData = req.body;
  const updatedHospital = await Hospital.findByIdAndUpdate(id, updatedHospitalData, { new: true });
  if (!updatedHospital) {
    throw new createError(404, 'Hospital not found');
  }
  res.status(200).json(updatedHospital);
});

// Controller function to delete a hospital by ID
const deleteHospitalById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedHospital = await Hospital.findByIdAndDelete(id);
  if (!deletedHospital) {
    throw new createError(404, 'Hospital not found');
  }
  res.status(200).json({ message: 'Hospital deleted successfully' });
});

export {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospitalById,
  deleteHospitalById,
};
