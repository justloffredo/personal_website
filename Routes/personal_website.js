
require('dotenv').config();
const express = require ("express");
const router = express.Router();
const renderTemplate = require("../utility/renderTemplate.js");
const BodyParser = require("body-parser");
const multer = require("multer");
const fs = require('fs');
// const loginFormMW = //require("../middleware/loginForm.js");
const Blog = require("../utility/blog.js");
const Posts = require("../models/posts.js");



router.get("/", function(req, res) {
	renderTemplate(res, "home", "Home", {
	});
});

router.get("/biography", function(req,res) {
	renderTemplate(res, "about_me", "Biography", {

	});

});

router.get("/travel", function(req, res, posts) {
	Posts.findAll().then(function(posts) {
		renderTemplate(res, "blog", "Travel", {
			posts: posts,
		});
	});
});




router.post("/form", function(req,res) {
	let message = "";
	Posts.create({
		 place: req.body.name,
		 description: req.body.description,
		 from: req.body.from,
		 to: req.body.to,
		 href: req.body.href,
		 image: req.body.img })
	.then(function() {
	 	 	res.redirect("/travel");
  	})
		.catch(function(err) {
			message = "Please Ensure All Fields Are Filled In Properly";
			fs.readdir('./assets/images', function(err, images) {
	 		 if(err)
	 	 	console.log(images);
	 	 	console.log('BODY', req.body);
			renderTemplate(res, "form", "Form", {
				message: message,
				images: images,
			});
		});
	});
});


router.get("/gallery", function(req, res) {
	renderTemplate(res, "image_gallery", "Images", {

	});
});

 router.get("/form", function(req, res) {
	 fs.readdir('./assets/images', function(err, images) {
		 if(err)
	 	console.log(images);
	 	console.log('BODY', req.body);
	 	renderTemplate(res, "form", "Blog post form", {
	 		images: images,
	 	});
 	});
});






module.exports = router;
