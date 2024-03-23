import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import userRoutes from "./routes/user.route";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// app.use(cors());
// app.use(express.json());

// app.use("/backend/users", userRoutes);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   res.status(errorStatus).send(errorMessage);
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect();
});
