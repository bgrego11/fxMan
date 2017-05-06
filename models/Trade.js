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
  sellCcy: {
      type: String,
      required: "sell ccy required"
  },
  tradeDate: {
    type: String,
    trim: true,
    required: "date is Required"
  },
  status: {
      type: String,
      required: "status is required"
  },
  profit: {
      type: Number
  }

  
});

var Trade = mongoose.model("Trade", tradeSchema);

// Export the model so the server can use it
module.exports = Trade;