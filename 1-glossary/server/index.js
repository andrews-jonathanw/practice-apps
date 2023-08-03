require("dotenv").config();
const express = require("express");
const path = require("path");
const insertWord = require('./db.js')
const findWord = require('./db.js')
const deleteWord = require('./db.js')
const editWord = require('./db.js')
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

app.put('/words/edit', (req, res) => {
  console.log('PUT from SERVER', req.body);
  var word = req.body.word;
  editWord.edit(word);
  res.end()
});

app.post('/words/delete', (req, res) => {
  console.log('POST from SERVER', req.body.word);
  var word = req.body.word;
  deleteWord.deleteWord(word);
  res.end()
});

app.get('/words', (req, res) => {
  console.log('GET from SERVER');
  findWord.find()
    .then((words) => {
      res.send(words)
    })
});

app.put('/words/search', (req, res) => {
  console.log('GET from SERVER', req.body.word);
  var word = req.body.word;
  findWord.find()
    .then((words) => {
      var filtered = words.filter((item) => {
        //console.log('item:', item);
        return item.word.indexOf(word) === 0;
      });
      console.log('this is filtered array',filtered);
      res.send(filtered);
    })
    .catch(err => {
      console.log(err);
    })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
