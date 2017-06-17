
const express= require("express");
const router= express.Router();
const renderTemplate = require("../utility/renderTemplate.js");
const BodyParser = require("body-parser");
const multer = require("multer");
const uploads = ({dest: "uploads/"});
const loginFormMW = require("../middleware/loginForm.js");
const Blog = require("../utility/blog.js");

router.get("/", function(req, res) {
	renderTemplate(res, "about_me", "Biography", {
	});
});

router.get("/travel", function(req, res) {
	Blog.getAll().then(function(posts) {
		renderTemplate(res, "blog", "Travel", {
			posts: posts,
		});
	});
});

router.post("/POST", function(req,res) {

})
router.get("/gallery", function(req, res) {
	renderTemplate(res, "image_gallery", "Images", {

	});
});

 router.get("/form", //loginFormMW(process.env.user, process.env.password),//
 function(req,res) {
	renderTemplate(res, "form", "Blog Post Form", {
	});
});

router.get("/login", function(req, res) {
	renderTemplate(res, "login", "Login", {

	});
});





module.exports = router;
