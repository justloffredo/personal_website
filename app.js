const express = require("express");
const personalWebsiteRouter = require("./Routes/personal_website.js");
const countryAppRouter = require("./Routes/country_app.js");
const renderTemplate = require("./utility/renderTemplate.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));





app.use("/", personalWebsiteRouter);
app.use("/", countryAppRouter);
app.get("*", function(req, res) {
	renderTemplate(res,"404");
});


app.listen(3000, function() {
	console.log("Your server is available at 3000");
});
