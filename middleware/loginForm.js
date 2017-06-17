const renderTemplate = require("../utility/renderTemplate.js")

function loginFormMW(user, password) {
	return function(req, res, next) {
		if(req.query.user !== user || req.query.password !== password) {
			let message = "";

			if (req.query.password, req.query.password) {
				message = "Please try another username and password";
				console.log("Failed login attempt from " + req.ip);
			}

			res.status(403);
			renderTemplate(res, "login", "login", {
				message : message });
			}

		else {
			renderTemplate(res, "form", "Form", {

			});
			next();
		}
	};
}

module.exports = loginFormMW;
