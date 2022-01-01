const express = require("express");
const passport = require("passport");
const googleStategy = require("passport-google-oauth20").Strategy;
const { connect } = require("mongoose");

const {
	googleClientID,
	googleClientSecret,
	mongoUrlString,
} = require("./config/keys");

// https://cryptic-everglades-03821.herokuapp.com/
// https://git.heroku.com/cryptic-everglades-03821.git

const app = express();

const PORT = process.env.PORT || 6969;

passport.use(
	new googleStategy(
		{
			clientID: googleClientID,
			clientSecret: googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("accessToken", accessToken),
				console.log("refreshToken", refreshToken),
				console.log("profile", profile);
		}
	)
);

app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	})
);

app.get("/auth/google/callback", passport.authenticate("google"));

connect(
	mongoUrlString,
	{ useNewUrlParser: true, setUnifiedTopology: true },
	() => app.listen(PORT, () => console.log("dbconnected/server started..."))
);
