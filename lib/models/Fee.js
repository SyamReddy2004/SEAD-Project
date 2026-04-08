import mongoose from "mongoose";

const FeeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  amountDue: { type: Number, required: true },
  amountPaid: { type: Number, default: 0 },
  status: { type: String, enum: ["Pending", "Partial", "Paid"], default: "Pending" },
  dueDate: { type: Date, required: true },
  paymentMethod: { type: String }, // e.g., 'Credit Card', 'Bank Transfer'
  receiptNumber: { type: String, unique: true }, // Auto-generated upon mock payment
}, { timestamps: true });

export default mongoose.models.Fee || mongoose.model("Fee", FeeSchema);
