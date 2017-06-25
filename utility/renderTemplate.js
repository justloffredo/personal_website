function renderTemplate(res, page, title, args, links,message) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		links: [{
			text: "GALLERY",
			href: "/gallery",
		},{
			text: "TRAVEL",
			href: "/travel",
		}, {
			text: "BIOGRAPHY",
			href: "/biography",
		},{
			text: "HOME",
			href: "/",
		}],
		message: message,
	});
}

module.exports = renderTemplate;
