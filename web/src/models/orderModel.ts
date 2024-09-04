import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  expecteddelivery: {
    type: Date,
    required: true,
  },
  quickdelivery: {
    type: Boolean,
    default: false,
  },
  deliverystatus: {
    type: String,
    default: "pending",
  },
});

const Orders = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Orders;
