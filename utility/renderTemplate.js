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
		}, {
			text: "Country Info",
			href: "/country_info",
		}],
	});
}

module.exports = renderTemplate;
