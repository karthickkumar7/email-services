const { Router } = require("express");
const passport = require("passport");

const { homeGet } = require("../controllers/authController");

const route = require("express").Router();

route.get("/", homeGet);

route.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	})
);

route.get("/auth/google/callback", passport.authenticate("google"));

module.exports = route;
