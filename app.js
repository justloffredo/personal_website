const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));


function renderTemplate(res, page, title, args) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		navbaritems: [{
			text: "Biography",
			href: "/about_me",
		}, {
			text: "Images",
			href: "/image_gallery",
		}, {
			text: "Home",
			href: "/about_me",
		}],
	});
}


app.get("/biography", function(req, res) {
	renderTemplate(res, "/about_me", "Biography", {
	});
});

app.get("/gallery", function(req, res) {
	renderTemplate(res, "/image_gallery", {
		title: "Images",

	});
});


app.listen(3000, function() {
	console.log("Your server is available at 3000");
});
