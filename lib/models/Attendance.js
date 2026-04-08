import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Present", "Absent", "Late", "Excused"], required: true },
  recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Teacher who recorded it
}, { timestamps: true });

// Prevent duplicate attendance for the same student on the same day
AttendanceSchema.index({ student: 1, date: 1 }, { unique: true });

export default mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
