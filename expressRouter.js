var express = require('express');
var app = express();

app.get('/yo', function (req, res) {
  res.send('Got a GET request');
});

app.post('/yo', function (req, res) {
  res.send('Got a POST request');
});

app.put('/yo', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/yo', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.all('/me', function (req, res) {
  res.send('I work all the time');
});

app.listen(3000);