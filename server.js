const express = require("express");
const { connect } = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const { mongoUriString, cookieKey } = require("./config/keys");
require("./services/passport");

// https://cryptic-everglades-03821.herokuapp.com/
// https://git.heroku.com/cryptic-everglades-03821.git

const app = express();

const PORT = process.env.PORT || 6969;

app.use(require("cors")());
app.use(express.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/authRoutes"));

connect(
	mongoUriString,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => app.listen(PORT, () => console.log("dbconnected/server started..."))
);
