const express = require("express");
const exec = require("child_process").execFile;
const app = express();
const port = process.env.PORT || 80;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

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
    if(err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
})

app.get("/sample0.wav", (req, res) => {
  res.sendFile(__dirname + "/sample0.wav");
})

app.get("/sample1.wav", (req, res) => {
  res.sendFile(__dirname + "/sample1.wav");
})

app.get("/sample2.wav", (req, res) => {
  res.sendFile(__dirname + "/sample2.wav");
})

app.get("/sample3.wav", (req, res) => {
  res.sendFile(__dirname + "/sample3.wav");
})

app.get("/sample4.wav", (req, res) => {
  res.sendFile(__dirname + "/sample4.wav");
})

app.get("/sample5.wav", (req, res) => {
  res.sendFile(__dirname + "/sample5.wav");
})

app.get("/sample6.wav", (req, res) => {
  res.sendFile(__dirname + "/sample6.wav");
})

app.get("/sample7.wav", (req, res) => {
  res.sendFile(__dirname + "/sample7.wav");
})

app.get("/sample8.wav", (req, res) => {
  res.sendFile(__dirname + "/sample8.wav");
})

app.get("/sample9.wav", (req, res) => {
  res.sendFile(__dirname + "/sample9.wav");
})

app.listen(port, () => {
<<<<<<< HEAD
  console.log("Listening at http://localhost:80");
})
=======
  console.log("Listening at http://localhost:3000");
})
>>>>>>> 7eecb0d9f36806b0abbb17103140c1c3c2af0c5e
