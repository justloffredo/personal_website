const express= require("express");
const router= express.Router();
const renderTemplate = require("../utility/renderTemplate.js")



router.get("/biography", function(req, res) {
	renderTemplate(res, "about_me", "Biography", {

	});
});
router.get("/gallery", function(req, res) {
	renderTemplate(res, "image_gallery", "Images", {

	});
});

router.get("/404", function(req,res) {
	renderTemplate(res, "404", "Unexpected Error")
	});


module.exports = router;
