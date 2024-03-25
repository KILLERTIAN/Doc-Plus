import mongoose from 'mongoose';

const { Schema } = mongoose;

const doctorSchema = new Schema({
  d_id: { type: String, required: true },
  d_name: { type: String, required: true },
  d_age: { type: Number, required: true },
  d_qualifications: { type: String, required: true },
  d_gender: { type: String, required: true },
  d_specialization: { type: String, required: true },
  d_hospital: { type: String, required: true }
}, { collection: 'doctors' });

export default mongoose.model('Doctor', doctorSchema);
