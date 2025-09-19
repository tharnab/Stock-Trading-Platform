const { Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    qty: Number,
    price: Number,
    model: { type: String, enum: ["BUY", "SELL"], required: true },
  },
  { timestamps: true }
);

module.exports = { OrderSchema };
