import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  maxTotalMarks: { type: Number, required: true, default: 100 },
});

const ResultSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  marksObtained: { type: Number, required: true },
  remarks: { type: String },
}, { timestamps: true });

export const Exam = mongoose.models.Exam || mongoose.model("Exam", ExamSchema);
export const Result = mongoose.models.Result || mongoose.model("Result", ResultSchema);
