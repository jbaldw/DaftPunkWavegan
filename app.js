const express = require("express");
const exec = require("child_process").execFile;
const fs  = require("fs");
const app = express();
const port = process.env.PORT || 80;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.disable("view cache");

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

    res.type(".js");
    res.send("file0.load(); file1.load(); file2.load(); file3.load(); file4.load(); \
              file5.load(); file6.load(); file7.load(); file8.load(); file9.load(); load.style.visibility = \"hidden\"");
  });
})

app.get("/sample0.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample0.wav").pipe(res);
})

app.get("/sample1.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample1.wav").pipe(res);
})

app.get("/sample2.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample2.wav").pipe(res);
})

app.get("/sample3.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample3.wav").pipe(res);
})

app.get("/sample4.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample4.wav").pipe(res);
})

app.get("/sample5.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample5.wav").pipe(res);
})

app.get("/sample6.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample6.wav").pipe(res);
})

app.get("/sample7.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample7.wav").pipe(res);
})

app.get("/sample8.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample8.wav").pipe(res);
})

app.get("/sample9.wav", (req, res) => {
  fs.createReadStream(__dirname + "/sample9.wav").pipe(res);
})

app.listen(port, () => {
  console.log("Listening at http://localhost:80");
})

