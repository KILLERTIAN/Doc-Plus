import Patient from "../models/patient.model.js";
import createError from "../utils/createError.js";

// Helper function to extract user fields from request body
const extractPatientFields = (body) => {
  const { p_id, p_name, p_age, p_gender, p_bloodgroup, p_address } = body;
  return { p_id, p_name, p_age, p_gender, p_bloodgroup, p_address };
};

export const createUser = async (req, res, next) => {
  try {
    const { p_id, p_name, p_age, p_gender, p_bloodgroup, p_address, firebaseUid } = req.body;
    const newUser = new Patient({
      p_id,
      p_name,
      p_age,
      p_gender,
      p_bloodgroup,
      p_address,
      firebaseUid // Include Firebase UID in the patient data
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

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
