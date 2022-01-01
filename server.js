const express = require("express");
const { connect } = require("mongoose");

const { mongoUriString } = require("./config/keys");
require("./services/passport");

// https://cryptic-everglades-03821.herokuapp.com/
// https://git.heroku.com/cryptic-everglades-03821.git

const app = express();

const PORT = process.env.PORT || 6969;

app.use("/", require("./routes/authRoutes"));

connect(
	mongoUriString,
	{ useNewUrlParser: true, setUnifiedTopology: true },
	() => app.listen(PORT, () => console.log("dbconnected/server started..."))
);
