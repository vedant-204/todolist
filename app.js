//jshint esversion: 6

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use('view engine', 'ejs');
app.get('/', (req, res) => {
	res.send('Hello World!');
	var today = new Date();
	var currentDay = today.getDay();
	var day = "";
	if (currentDay === 6 || currentDay === 0) {
		day = "Weekend";
	} else {
		day = "Weekday";
	}
	res.render("list", {kindaDay: day});
});

app.listen(3000, function() {
	console.log('Listening on port 3000!');
});

