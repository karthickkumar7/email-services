const passport = require("passport");
const googleStategy = require("passport-google-oauth20").Strategy;

const { googleClientID, googleClientSecret } = require("../config/keys");
const User = require("../models/User");

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
	const user = await User.findById(_id);
	done(null, user);
});

passport.use(
	new googleStategy(
		{
			clientID: googleClientID,
			clientSecret: googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		async (accessToken, refreshToken, profile, done) => {
			const { id, displayName, _json } = profile;
			try {
				const user = await User.find({ id });
				if (!user.length) {
					const newUser = new User({
						googleId: id,
						username: displayName,
						email: _json.email,
					});
					await newUser.save();
					done(null, newUser);
				}
				done(null, user);
			} catch (error) {
				console.log(error.message);
			}
		}
	)
);
