import Doctor from "../models/doctor.model.js";
import createError from "../utils/createError.js";

// Helper function to extract doctor fields from request body
const extractDoctorFields = (body) => {
  const {
    d_id,
    d_name,
    d_age,
    d_qualifications,
    d_gender,
    d_specialization,
    d_hospital
  } = body;
  return {
    d_id,
    d_name,
    d_age,
    d_qualifications,
    d_gender,
    d_specialization,
    d_hospital
  };
};

export const createDoctor = async (req, res, next) => {
  try {
    const doctorFields = extractDoctorFields(req.body);
    const newDoctor = new Doctor(doctorFields);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    next(err);
  }
};

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
  const { page = 1, limit = 20 } = req.query;

  try {
    const doctors = await Doctor.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(doctors);
  } catch (err) {
    next(err);
  }
};
