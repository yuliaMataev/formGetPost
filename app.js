const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname, "/views");
app.set("views", viewsPath);

app.get("/form", (req, res) => {
  console.log(req.query);
  res.render("form");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.render("form");
});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
