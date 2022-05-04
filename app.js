//jshint esversion: 6

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.send('Hello World!');
	var today = new Date();
	var currentDay = today.getDay();
	
	if (currentDay === 6 || currentDay === 0) {
		res.sendFile(__dirname + '/weekend.html');
	} else {
		res.sendFile(__dirname + '/weekday.html');
	}
});

app.listen(3000, function() {
	console.log('Listening on port 3000!');
});

