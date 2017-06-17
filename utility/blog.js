const Posts = require("../models/posts.js");



const Blog = {
	getAll: function() {
		Posts.findAll();
	},

	add: function(post) {
		return Posts.create({name: post});
	},
};


module.exports = Blog;
