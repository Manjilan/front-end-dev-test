var express = require("express"),
app = express(),
bodyParser = require("body-parser");

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true, }));

// serve static files from public folder
app.use(express.static('public'));

// set Models
// var db = require('./models'),
// Message = db.Message;

app.get("/", function(req, res){
  res.sendfile('views/index.html');
})
//Get Messages from the form
app.get("/messages", function(req,res){
    Message.find({}, function(err, allMessages){
      if (err){
        console.log(err);
      } else {
        res.json(allMessages);
      }
    })
});

//Create Message
app.post("/messages", function(req, res){
  var newMessage = new Message(req.body);
  console.log(req.body);
  newMessage.save(function(err, savedMessage){
    if (err){
      console.log(err)
    } else {
      res.redirect("/");
    }
  })
});

//-------------Server------------->
app.listen(process.env.PORT || 3000, function(){
  console.log("listening..");
});
