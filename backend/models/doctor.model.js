import mongoose from 'mongoose';

const { Schema } = mongoose;

const doctorSchema = new Schema({
  firebaseUid: { type: String, required: true },
  d_id: { type: String, required: true },
  d_name: { type: String, required: true },
  d_age: { type: Number, required: true },
  d_qualifications: { type: String, required: true },
  d_gender: { type: String, required: true },
  d_specialization: { type: String, required: true },
  d_hospital: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true }, 
  availability: { type: String, required: false },
  educations: [{
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: Number, required: true },
  }],
  work_experience: [{
    position: { type: String, required: true },
    hospital: { type: String, required: true },
    start_year:{ type: Number, required: true },
    end_year: { type: Number, default: 'Present' }
  }],
  bio: { type: String, required: true },
  avatar: { type: String, required: true }
}, { collection: 'doctors' });

export default mongoose.model('Doctor', doctorSchema);