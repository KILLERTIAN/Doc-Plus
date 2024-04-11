import Doctor from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createError } from "../utils/createError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createDoctor = asyncHandler(async (req, res) => {
  const {
    firebaseUid,
    d_id,
    d_name,
    d_age,
    d_gender,
    d_qualifications,
    d_specialization,
    d_hospital,
    email,
    phone_number,
    availability,
    educations,
    work_experience,
    bio,
    avatar,
  } = req.body;

  // Validate required fields
  if (
    [
      firebaseUid,
      d_id,
      d_name,
      d_age,
      d_gender,
      d_qualifications,
      d_specialization,
      d_hospital,
      email,
      phone_number,
      availability,
      educations,
      work_experience,
      bio,
      avatar,
    ].some((field) => field?.trim() === "")
  ) {
    throw new createError(400, "All fields are required");
  }

  // Check if doctor already exists by email or phone number
  const existingDoctor = await Doctor.findOne({ $or: [{ email }, { phone_number }] });
  if (existingDoctor) {
    throw new createError(409, "Doctor with email or phone number already exists");
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

  // Parse educations and work_experience from JSON strings
  const parsedEducations = JSON.parse(educations);
  const parsedWorkExperience = JSON.parse(work_experience);

  // Create doctor in the database
  const newDoctor = await Doctor.create({
    firebaseUid,
    d_id,
    d_name,
    d_age,
    d_gender,
    d_qualifications,
    d_specialization,
    d_hospital,
    email,
    phone_number,
    availability,
    educations: parsedEducations,
    work_experience: parsedWorkExperience,
    bio,
    avatar: avatarCloudinary.url,
  });

  // Respond with the newly created doctor
  return res.status(201).json(new ApiResponse(201, newDoctor, "Doctor registered successfully"));
});

export { createDoctor };

// Other controller functions remain unchanged

export const deleteDoctor = async (req, res, next) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).send("Doctor deleted.");
  } catch (err) {
    next(err);
  }
};

export const updateDoctor = async (req, res, next) => {
  try {
    const doctorFields = extractDoctorFields(req.body);
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      doctorFields,
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).send("Doctor not found.");
    }

    res.status(200).json(updatedDoctor);
  } catch (err) {
    next(err);
  }
};

export const getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).send("Doctor not found.");
    }

    res.status(200).json(doctor);
  } catch (err) {
    next(err);
  }
};

export const getDoctors = async (req, res, next) => {
  const { firebaseUid } = req.query;

  try {
    let query = {};

    // Check if firebaseUid is provided in the query parameters
    if (firebaseUid) {
      query.firebaseUid = firebaseUid;
    }

    // Retrieve doctors based on the constructed query
    const doctors = await Doctor.find(query);

    res.status(200).json(doctors);
  } catch (err) {
    next(err);
  }
};
