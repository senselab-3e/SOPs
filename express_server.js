var express = require("express");
var app = express();
var PORT = 8080; // default port 8080

const URL = "http://inflexions.org/cepholopodresearch/p5/gifs/"

var urlDatabase = {
  "thingy1": URL + "bbl.gif",
  "thingy2": "http://www.inflexions.org"
};

app.get("/", (req, res) => {
  res.send("Helloworld!");
});

app.get("/entryway", (req, res) => {
  res.send("<html><body>entry way<b>World</b></body></html>\n");
});

app.get("/welcomewagon", (req, res) => {
  res.send("<html><body>welcome wagon</b></body></html>\n");
});

app.get("/catherder", (req, res) => {
  res.send("<html><body>cat herder<b>World</b></body></html>\n");
});

app.get("/creativecutcall", (req, res) => {
  res.send("<html><body>creative cut call<b>World</b></body></html>\n");
});

app.get("/regroup", (req, res) => {
  res.send("<html><body>regroup<b>World</b></body></html>\n");
});

app.get("/goddessofanarchy", (req, res) => {
  res.send("<html><body>goddess of anarchy<b>World</b></body></html>\n");
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});