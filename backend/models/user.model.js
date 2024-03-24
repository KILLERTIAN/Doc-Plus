// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     avatar: { type: String, required: false },
//     u_id: { type: Number, required: true },
//     gender: { type: String, required: true },
//     age: { type: Number, required: true },
//     blood_group: { type: String, required: false },
//     address: { type: String, required: false },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("User", userSchema);

import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  pid: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }
}, { collection: 'patients' });

export default mongoose.model('User', userSchema);
