const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, function() {
  console.log('server is running on port ' + port);
});

app.get('/', function(req, res) {

  var today = new Date();
  var javaObj = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  var day = today.getDay();
  
  res.render('list', {
    day: javaObj[day]
  })
});
