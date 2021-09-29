const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();
const port = 3000;

var items = ["Buy food", "cook food", "eat food"];
var workItem=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.listen(port, function() {
  console.log('server is running on port ' + port);
});


app.get('/', function(req, res) {

  let day = date.getDay();

  res.render('list', {
    day: day,
    items: items
  })
});


app.post("/", function(req, res) {
  var item = req.body.newItem

  if (req.body.list==="Work"){
    if (item !== "") {
      workItem.push(item);
    }
    res.redirect('/work');
  }else{
    if (item !== "") {
      items.push(item);
    }
    res.redirect('/');
  }

})


app.get('/work',function(req,res){

  res.render('list',{
    day:'Work list',
    items:workItem
  });
});

app.post('/work',function(req,res){

  let item=req.body.newItem
  workItem.push(item)

  res.redirect('/work');
})

app.get('/about',function(req,res){
  res.render('about');
})
