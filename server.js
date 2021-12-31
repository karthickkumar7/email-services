const express = require("express");

const app = express();

const PORT = process.env.PORT || 6969;

app.get("/", (req, res) => {
	res.send(
		'<h1 style="padding:20px;" > <span style="color:red;">Chethan</span> is a bitch boy man<span style="color:pink;">gina</span> cuck <span style="color:orange;">simp</span></h1>'
	);
});

//https://cryptic-everglades-03821.herokuapp.com/
// https://git.heroku.com/cryptic-everglades-03821.git

app.listen(PORT, () => console.log("server started..."));
