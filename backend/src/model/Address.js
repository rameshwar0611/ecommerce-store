const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    name: { type: String },
    locality: { type: String },
    pincode: { type: Number },
    state: { type: String },
    address: { type: String },
    mobile: { type: String },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
