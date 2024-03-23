import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    avatar: { type: String, required: false },
    domain: { type: String, required: false },
    available: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);