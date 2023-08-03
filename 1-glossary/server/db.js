const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongoose database connected!')
  })
  .catch(err => {
    console.log(err);
  });

let wordSchema = mongoose.Schema({
  word: String,
  definition: String
});

let Word = mongoose.model('Word', wordSchema);

let save = (word) => {
  // console.log(word);
  let newWord = new Word({
    word: word.word,
    definition: word.definition
  }).save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Document inserted successfully');
    }
  });
}

let find = () => {
  return Word.find();
}

let deleteWord = (word) => {
  console.log('deleting ', {word: word});
  Word.deleteOne({word: word})
    .then(() => {
      console.log('Deleted entry');
    })
    .catch(err => {
      console.log(err);
    })
}

let edit = (word) => {
  console.log('editing ', word.word);
  var oldDefinition = word.word.definition;
  Word.findOneAndUpdate({definition: oldDefinition}, {definition: word.newDefinition})
    .then(() => {
      console.log('Edited entry');
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports.save = save;
module.exports.find = find;
module.exports.deleteWord = deleteWord;
module.exports.edit = edit;