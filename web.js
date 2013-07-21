var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var buf = fs.readFileSync('./index.html');
  var hello = buf.toString('utf8');
  response.send( hello );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

