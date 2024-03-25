import mongoose from 'mongoose';

const { Schema } = mongoose;

const pdInteractionSchema = new Schema({
  p_id: { type: String, required: true },
  d_id: { type: String, required: true },
  meeting_date: { type: Date, required: true },
  hospital: { type: String, required: true },
  symptoms: { type: [String], required: true },
  medicines_provided: { type: [String], required: true },
  documents: { type: [String], required: true },
}, { collection: 'pdinteraction' });

export default mongoose.model('PDInteraction', pdInteractionSchema);
