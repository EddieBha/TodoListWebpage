var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');


var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

app.use(express.static(__dirname + '/public'));

var server = app.listen(8000, function() { // väljer servern
  console.log('Server listening on port ' + server.address().port);
});
