import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  regNo: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
  dateOfBirth: { type: Date },
  parentEmail: { type: String },
  address: { type: String },
  enrollmentDate: { type: Date, default: Date.now },
  busRoute: { type: String }, // For transport management
});

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
