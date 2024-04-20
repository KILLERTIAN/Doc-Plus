import Hospital from '../models/hospital.model.js'; 

const createHospital = async (req, res) => {
  try {
    const { firebaseUid, name, avatar, location, contact, doctors, rating, rooms, facilities, specialties } = req.body;
    const hospital = new Hospital({
      firebaseUid,
      name,
      avatar,
      location,
      contact,
      doctors,
      rating,
      rooms,
      facilities,
      specialties
    });
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all hospitals
const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single hospital by ID
const getHospitalById = async (req, res) => {
  const { id } = req.params;
  try {
    const hospital = await Hospital.findById(id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a hospital by ID
const updateHospitalById = async (req, res) => {
  const { id } = req.params;
  const updatedHospitalData = req.body;
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(id, updatedHospitalData, { new: true });
    if (!updatedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json(updatedHospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a hospital by ID
const deleteHospitalById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHospital = await Hospital.findByIdAndDelete(id);
    if (!deletedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospitalById,
  deleteHospitalById
};
