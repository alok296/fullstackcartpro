const mongoose = require("mongoose");

const cartitem = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  qty: {
    type: String,
    required: true
  }
});

const cartvalue = mongoose.model('cartitem', cartitem);
module.exports = cartvalue;
