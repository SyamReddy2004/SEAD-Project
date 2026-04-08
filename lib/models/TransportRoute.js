import mongoose from "mongoose";

const TransportRouteSchema = new mongoose.Schema({
  routeName: { type: String, required: true, unique: true }, // e.g. "Route A - Downtown"
  driverName: { type: String, required: true },
  driverContact: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  stops: [{
    location: String,
    pickupTime: String,
    dropoffTime: String
  }],
}, { timestamps: true });

export default mongoose.models.TransportRoute || mongoose.model("TransportRoute", TransportRouteSchema);
