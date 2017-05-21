
const express = require("express");
const countries = require("../json/countries.json");
const renderTemplate = require("../utility/renderTemplate.js");
const router= express.Router();



router.get("/country_info/:code", function(req, res) {
	var country = countries[req.params.code.toUpperCase()];
	console.log(countries);

	if (!country) {
		res.status(404);
		return renderTemplate(res,"404");
	}

	// res.render("pages/country_info.ejs",country);
	renderTemplate(res, "country_info", "Country", country);
});

module.exports = router;
