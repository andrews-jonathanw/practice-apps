require("dotenv").config();
const express = require("express");
const path = require("path");
const insertWord = require('./db.js')
const findWord = require('./db.js')
const app = express();
const bodyParser = require('body-parser')

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())

app.post('/words', (req, res) => {
  console.log('POST from SERVER', req.body.word);
  var word = req.body.word;
  insertWord.save(word);
  res.end()
});

app.get('/words', (req, res) => {
  console.log('GET from SERVER');
  findWord.find()
    .then((words) => {
      res.send(words)
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
