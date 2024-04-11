import Patient from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createError } from "../utils/createError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createUser = asyncHandler(async (req, res) => {
  const {
    firebaseUid,
    p_id,
    p_name,
    p_age,
    p_gender,
    p_bloodgroup,
    p_address,
    avatar,
    Allergies,
    Family_History 
  } = req.body;

  if (
    [
      firebaseUid,
      p_id,
      p_name,
      p_age,
      p_gender,
      p_bloodgroup,
      p_address,
      Allergies,
      Family_History 
    ].some((field) => field?.trim() === "")
  ) {
    throw new createError(400, "All fields are required");
  }

  // Check if user already exists by firebaseUid or p_id
  const existedUser = await Patient.findOne({ $or: [{ firebaseUid }, { p_id }] });
  if (existedUser) {
    throw new createError(409, "User with Firebase UID or Patient ID already exists");
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

  // Create user in the database
  const newUser = await Patient.create({
    firebaseUid,
    p_id,
    p_name,
    p_age,
    p_gender,
    p_bloodgroup,
    p_address,
    avatar: avatarCloudinary.url,
    Allergies,
    Family_History // Add new fields here
  });

  // Respond with the newly created user
  return res.status(201).json(new ApiResponse(201, newUser, "User registered successfully"));
});

export { createUser };

export const deleteUser = async (req, res, next) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted.");
  } catch (err) {
    next(err);
  }
};


export const updateUser = async (req, res, next) => {
  try {
    const { p_id, p_name, p_age, p_gender, p_bloodgroup, p_address } = req.body;
    const updatedUser = await Patient.findByIdAndUpdate(
      req.params.id,
      { p_id, p_name, p_age, p_gender, p_bloodgroup, p_address },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await Patient.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  const { firebaseUid } = req.query;

  try {
    const users = await Patient.find({ firebaseUid });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};