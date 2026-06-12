import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: String, // keep String if your User _id / Clerk userId is String
      required: true,
      ref: "User",
    },
    show: {
      type: String, // keep String if Show _id is String
      required: true,
      ref: "Show",
    },
    amount: {
      type: Number,
      required: true,
    },
    bookedSeats: {
      type: [String],
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
