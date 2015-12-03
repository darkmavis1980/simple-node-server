var express = require('express'),
app = express();

var config = {
  port: 7999,
  publicRoot: __dirname + '/public'
};

// set static files location
// used for requests that our frontend will make
app.use(express.static(config.publicRoot));

//start the server
app.listen(config.port);
console.log('Listening on port ' + config.port);
