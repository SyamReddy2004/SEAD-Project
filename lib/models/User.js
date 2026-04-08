import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Should be bcrypt hashed
  role: { type: String, enum: ["admin", "teacher", "student"], required: true },
  name: { type: String, required: true },
  regNo: { type: String, unique: true }, // Optional for tracking specifically
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
