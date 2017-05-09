var express = require("express");
var moment = require("moment");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var cheerio = require("cheerio");
var axios = require("axios");
//currency rate/conversion packages
var oxr = require('open-exchange-rates'),
  fx = require('money');
oxr.set({
  app_id: 'b3e3d3097383466fba640039d4f7ba4e'
})

//encryption method
var crypto = require('crypto'),
  algorithm = 'aes-256-ctr',
  password = 'd6F3Efeq';

//encrypt function from crypto
function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


mongoose.connect("mongodb://heroku_zmgt7t27:mgdmvi5v28jejrvgr01peiqglr@ds133291.mlab.com:33291/heroku_zmgt7t27");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

var Trade = require("./models/Trade.js");
var User = require("./models/User.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("./public"));
//converts from any amt of ccy to another 
//to get 100 EUR to USD get localhost:8080/100/EUR/USD
app.post('/new/trade', function (req, res) {
  var amt = req.body.amt;
  var sell = req.body.sell;
  var buy = req.body.buy;
  oxr.latest(function () {
    // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
    fx.rates = oxr.rates;
    fx.base = oxr.base;
    res.json(fx(amt).from(sell).to(buy));
  });

})

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/user/login", function (req, res) {
  var data = req.body;
  user = {
    username: data.user,
    hashPass: encrypt(data.password)
  };


  User.find({
    username: user.username,
  }, function (err, doc) {
    if (err) {
      res.json(err)
    } else {
      if (doc[0].hashPass === user.hashPass) {
        res.json(doc[0])
      }

    }
  })
});



app.post("/portfolio", function (req, res) {
  console.log(req.body);
  var id = req.body.id;
  Trade.find({
    client: new RegExp('^'+id+'$', "i")
  }, function (err, doc) {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
});


app.post("/user/create", function (req, res) {
  var data = req.body;
  user = new User({
    username: data.user,
    email: data.email,
    hashPass: encrypt(data.password)
  });


  user.save(function (err, resp) {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      console.log("saved");
      res.send(user);
    }
  })


});

app.get("/articles", function (req, res) {
  var articles = [];
  axios.get("http://www.nytimes.com/").then(function (response) {

    var $ = cheerio.load(response.data);

    $("article h2").each(function (i, element) {
      articles.push({
        title: $(this).children("a").text(),
        link: $(this).children("a").attr("href")
      })
    })
  }).then(function () {
    console.log(articles);
  })
});





app.post("/book/trade", function (req, res) {
  var data = req.body;
  trade = new Trade(req.body);


  trade.save(function (err, resp) {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      console.log("saved");
      res.send(trade);
    }
  })


});



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);


});