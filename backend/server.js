import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js'; // Import authRoute
import patientRoute from './routes/patient.route.js'; // Import patientRoute
import pdinteractionRoute from './routes/pdinteraction.route.js'; // Import pdinteractionRoute
import doctorRoute from './routes/doctor.route.js'; // Import doctorRoute

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

app.use(cors());
app.use(express.json());

// Use patientRoute for handling patient-related routes
app.use('/backend/patients', patientRoute);

// Use pdinteractionRoute for handling patient-doctor interaction routes
app.use('/backend/pdinteraction', pdinteractionRoute);

// Use doctorRoute for handling doctor-related routes
app.use('/backend/doctors', doctorRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  res.status(errorStatus).send(errorMessage);
});

// Middleware for handling authentication routes
app.use('/auth', authRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect();
});
