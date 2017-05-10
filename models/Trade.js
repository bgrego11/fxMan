var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

var tradeSchema = new Schema({
  buyAmt: {
    type: Number,
    required: "buy amt is Required",
  },
  buyCcy: {
      type: String,
      required: "buy ccy required"
  },
  sellAmt: {
    type: Number,
    required: "sell amt is Required",
  },
  tradeDate: {
    type: String,
    trim: true,
    required: "t date is Required"
  },
  valueDate: {
    type: String,
    trim: true
  },
  closeVal: {
      type: Number
  },
  profit: {
      type: Number
  },
  
  status: {
      type: String,
      required: "status is required"
  },
  client: {
    type: String,
    trim: true,
    required: true,
  }

  
});

var Trade = mongoose.model("Trade", tradeSchema);

// Export the model so the server can use it
module.exports = Trade;