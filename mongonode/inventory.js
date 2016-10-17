require("babel-core/register");
require("babel-polyfill");

var express = require('express');
var app = express();

app.get('/inventory', function (req, res) {
  res.sendFile(__dirname +'/inv.html');
});

app.listen(3001);