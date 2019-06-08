var express = require("express");
var app = express();
var PORT = 8080; // default port 8080

var urlDatabase = {
  "thingy1": "http://www.senselab.ca",
  "thingy2": "http://www.inflexions.org"
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});