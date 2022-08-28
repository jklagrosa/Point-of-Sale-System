import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalSales: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("products", productSchema);
