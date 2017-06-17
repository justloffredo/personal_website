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
	dateTo: {
		type: Sequelize.DATE,
		notNull: true,
	},
	dateFrom: {
		type: Sequelize.DATE,
		notNull: true,
	},
	image : {
		type: Sequelize.STRING(100),
		notNull: true,
	}
});
