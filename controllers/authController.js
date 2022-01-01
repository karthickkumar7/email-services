const User = require("../models/User");

exports.homeGet = (req, res) => {
	res.json({ home: "Home route new" });
};

exports.currentUser = async (req, res) => {
	res.json(req.user);
};
