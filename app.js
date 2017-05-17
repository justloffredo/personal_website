const express = require("express");
const app = express();
const countries = require('./json/countries.json');
console.log(countries);




app.set("view engine", "ejs");
app.use(express.static("assets"));


function renderTemplate(res, page, title, args, links) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		links: [{
			text: "Biography",
			href: "/biography",
		}, {
			text: "Gallery",
			href: "/gallery",
		}, {
			text: "Home",
			href: "/biography",
		}, {
			text: "Country Info",
			href: "/country_info",
		}],
	});
}


app.get("/biography", function(req, res) {
	renderTemplate(res, "about_me", "Biography", {
	});
});

app.get("/gallery", function(req, res) {
	renderTemplate(res, "image_gallery", "Images", {

	});
});


app.get("/country_info/:code", function(req, res) {
	var country = countries[req.params.code];
	console.log(countries);
	res.render("pages/country_info.ejs",country);
	renderTemplate(res, "country_info", "Country", {




	});
});


app.listen(3000, function() {
	console.log("Your server is available at 3000");
});
