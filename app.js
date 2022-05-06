//jshint esversion: 6

const express = require('express');
const app = express();

var items = ["Buy food", "Cook Food", "Eat Food"];

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
	var today = new Date();
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	}
	var day = today.toLocaleDateString("en-US", options);
	res.render("list", {kindaDay: day, newListItem: items});

});

app.post("/", function(req, res){
	item = req.body.newItem;
	items.push(item);
	res.redirect("/");
	console.log(item);
})

app.listen(3000, function() {
	console.log('Listening on port 3000!');
});

