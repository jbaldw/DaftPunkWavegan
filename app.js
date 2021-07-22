const express = require("express");
const exec = require("child_process").execFile;
const app = express();
const port = process.env.PORT || 80;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
})

app.get("/javascripts/jquery.js", (req, res) => {
  res.sendFile(__dirname + "/public/javascripts/jquery.js");
})

app.get("/javascripts/generator.js", (req, res) => {
  res.sendFile(__dirname + "/public/javascripts/generator.js");
})

app.get("/generate", (req, res) => {
  exec(__dirname + "/public/audio-generator.exe", function(err, data) {
    console.log(err);
    console.log(data);
  });
})

app.listen(port, () => {
  console.log("Listening at http://localhost:3000");
})
