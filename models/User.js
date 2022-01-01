const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	googleId: {
		type: String,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

module.exports = new model("User", userSchema);
