import mongoose from "mongoose";

const LMSNoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  contentUrl: { type: String, required: true }, // URL to uploaded PDF or Note Document
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Teacher ID
}, { timestamps: true });

export default mongoose.models.LMSNote || mongoose.model("LMSNote", LMSNoteSchema);
