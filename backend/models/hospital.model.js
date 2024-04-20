import mongoose from 'mongoose';

const { Schema } = mongoose;

const hospitalSchema = new Schema({
    firebaseUid: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String, required: false }, // URL for hospital avatar image
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    },
    contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    doctors: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }], // Array of doctor references
    rating: { type: Number, default: 0 }, // Average rating of the hospital
    rooms: {
        total: { type: Number, default: 0 },
        available: { type: Number, default: 0 }
    },
    facilities: [{ type: String }], // List of facilities provided by the hospital
    specialties: [{ type: String }], // List of medical specialties available at the hospital
    createdAt: { type: Date, default: Date.now }
}, { collection: 'hospitals' });

export default mongoose.model('Hospital', hospitalSchema);
