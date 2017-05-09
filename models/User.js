var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
      type: String,
      required: "email required",
      validate: [validateEmail, 'Please input a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  hashPass: {
    type: String,
    required: "pw is Required",
  } 
});

var User = mongoose.model("User", userSchema);

// Export the model so the server can use it
module.exports = User;