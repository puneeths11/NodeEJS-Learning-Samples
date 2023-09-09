const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//public
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));




//home
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//hello
app.get("/hello", (req, res) => {
  res.send("hello");
});

//instagram
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instdata = require("./data.json");
  let data = instdata[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

//rolldice
app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceval });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
