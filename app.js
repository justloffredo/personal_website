const express = require("express");
const app = express();

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


app.listen(3000, function() {
	console.log("Your server is available at 3000");
});
