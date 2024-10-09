// index.js

// Import required modules
require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

// Enable CORS to allow testing from external sources
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Basic route to serve the homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Simple hello endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// /api/whoami endpoint to return user IP address, language, and software information
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
