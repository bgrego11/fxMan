var express = require("express");
var moment = require("moment");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var oxr = require('open-exchange-rates'),
    fx = require('money');
oxr.set({ app_id: 'b3e3d3097383466fba640039d4f7ba4e' })


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


mongoose.connect("mongodb://heroku_tkvzkjbd:3bk1qu8102nho8rr2l4oev0a5j@ds133241.mlab.com:33241/heroku_tkvzkjbd");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var Trade = require("./models/Trade.js");
var User = require("./models/User.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));
//converts from any amt of ccy to another 
//to get 100 EUR to USD get localhost:8080/100/EUR/USD
// app.get('/new/:amt/:sell/:buy',function(req,res){
//         var amt = req.params.amt;
//         var sell = req.params.sell;
//         var buy = req.params.buy;
//                 oxr.latest(function() {
//                 // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
//                 fx.rates = oxr.rates;
//                 fx.base = oxr.base;
//                 res.json(fx(amt).from(sell).to(buy));
//             });
            
//  })

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.post("/user/create", function(req, res){
    var data = req.body;
    user = new User({
      username: data.user,
      email: data.email,
      hashPass: data.password
    });


    user.save( function(err,resp){
        if (err) {
          console.log(err);
          res.send(err)
        }
        else {
          console.log("saved");
          res.send(user);
        }
    })
    

  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  

  });