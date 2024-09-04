import mongoose from "mongoose";

const demandSchema = new mongoose.Schema({
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
  demandstatus: {
    type: String,
    default: "pending",
  },
});

const Demand =
  mongoose.models.demands || mongoose.model("demands", demandSchema);

export default Demand;
