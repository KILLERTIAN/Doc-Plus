import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';
import patientRoute from './routes/patient.route.js';
import pdinteractionRoute from './routes/pdinteraction.route.js';
import doctorRoute from './routes/doctor.route.js';
import hospitalRoute from './routes/hospital.route.js';
import { upload } from './middlewares/multer.middleware.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.text({ type: '/' }));

// Routes
app.use('/auth', authRoute);
app.use('/backend/patients', patientRoute);
app.use('/backend/pdinteraction', pdinteractionRoute);
app.use('/backend/doctors', doctorRoute);
app.use('/backend/hospitals', hospitalRoute);

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Handle other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).send(message);
});

// Start Server
const PORT = process.env.PORT || 8000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
