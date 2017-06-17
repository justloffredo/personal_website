function renderTemplate(res, page, title, args, links) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		links: [{
			text: "Travel",
			href: "/travel",
		},{
			text: "Biography",
			href: "/",
		}, {
			text: "Gallery",
			href: "/gallery",
		}, {
			text: "Home",
			href: "/",
		}],
	});
}

module.exports = renderTemplate;
