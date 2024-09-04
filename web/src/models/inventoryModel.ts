import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
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
  visiblestock: {
    type: Number,
    default: "pending",
  },
});

const Inventory =
  mongoose.models.inventories || mongoose.model("inventories", inventorySchema);

export default Inventory;
