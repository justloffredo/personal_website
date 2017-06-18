const sql = require("../utility/sql");
const Sequelize = require("sequelize");

module.exports = sql.define("post", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	place: {
		type: Sequelize.STRING(100),
		notNull: true,
	},
	description: {
		type: Sequelize.STRING(5000),
		notNull: true,
	},
	from: {
		type: Sequelize.DATE,
		notNull: true,
	},
	to: {
		type: Sequelize.DATE,
		notNull: true,
	},
	href : {
		type: Sequelize.STRING(1000),
		notNull: true,
	},
	image : {
		type: Sequelize.STRING(100),
		notNull: true,
	}
});
