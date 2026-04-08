import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  targetAudience: { type: String, enum: ["All", "Students", "Teachers", "Specific"], default: "All" },
  targetUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // If sent to specific person
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Admin
  isRead: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);
