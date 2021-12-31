const express = require("express");

const app = express();

const PORT = process.env.PORT || 6969;

app.get("/", (req, res) => {
	res.send(
		'<h1 style="padding:20px;" > <span style="color:red;">Chethan</span> is a bitch boy mangina cuck <span style="color:orange;">simp</span></h1>'
	);
});

app.listen(PORT, () => console.log("server started..."));
