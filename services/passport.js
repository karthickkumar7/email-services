const passport = require("passport");
const googleStategy = require("passport-google-oauth20").Strategy;

const { googleClientID, googleClientSecret } = require("../config/keys");

passport.use(
	new googleStategy(
		{
			clientID: googleClientID,
			clientSecret: googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {}
	)
);
