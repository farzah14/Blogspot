const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE}` });
const port = process.env.PORT || 8080;
const path = require("path");
const home = require("./routes/home");
const message = require("./routes/message");
const posts = require("./routes/posts");

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", home);
app.use("/message", message);
app.use("/posts", posts);

app.listen(port, () => {
	console.log(port);
});
