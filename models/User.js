const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	googleId: {
		type: String,
	},
	username: {
		type: String,
	},
	email: {
		type: String,
	},
});

module.exports = new mongoose.model("User", userSchema);
