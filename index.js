const express = require('express');
const path = require('path');
const app = express();

// Set up public directory to serve static files.
// This directory will contain your HTML file and any associated assets.
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function() {
    console.log('App is listening on port 3000!');
});
