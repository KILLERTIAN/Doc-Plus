import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
    phone: { type: String, required: true },
    email: { type: String, required: true }
}, { _id: false });

const locationSchema = new Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
}, { _id: false });

const hospitalSchema = new Schema({
    firebaseUid: { type: String, required: true },
    h_id: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    location: { type: locationSchema, required: true },
    contact: { type: contactSchema, required: true },
    doctors: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    rating: { type: Number, default: 0 },
    rooms: [{
        total: { type: Number, default: 0 },
        available: { type: Number, default: 0 }
    }],
    facilities: [{ type: String }],
    specialties: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
}, { collection: 'hospitals' });

export default mongoose.model('Hospital', hospitalSchema);


