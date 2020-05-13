var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index.js');

var app = express();


// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);


// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!');
// });

module.exports = app;