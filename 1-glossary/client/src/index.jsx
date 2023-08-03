import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import AddWord from './components/addWord.jsx';
import WordList from './components/WordList.jsx';
import SearchWord from './components/SearchWord.jsx';
import axios from 'axios';


const App = () => {
  const [words, setWordList] = useState([]);
  const [filteredWords, setWordFiltered] = useState([]);

  useEffect(() => {
    getWords();
  },[]);

  const getWords = () => {
     return axios.get('/words')
      .then(({data}) => {
        //console.log('GET from CLIENT', {data});
        setWordList({data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  const add = (word) => {
    axios.post('/words', {word})
      .then((res) => {
        console.log('POST from CLIENT');
        return getWords();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const edit = (word, definition) => {
    axios.put('/words/edit', {word, definition})
      .then((res) => {
        console.log('PUT from CLIENT');
        return getWords();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const search = (word) => {
    return axios.put('/words/search', word)
      .then(({data}) => {
        //console.log('GET from CLIENT', {data});
        setWordList({data});
      })
      .catch(err => {
        console.log(err);
      })
    }

 const deleteWord = (e) => {
  console.log('delete from client');
  //console.log(e.target.value);
  var word = e.target.value;
  axios.post('/words/delete', {word})
      .then((res) => {
        //console.log('POST from CLIENT');
        return getWords();
      })
      .catch(err => {
        console.log(err);
      })
}

  return (
  <div>
    <p>Hello, Jonathan you're a terrible developer you should quit now!</p>
    <p>GIVE UP GIVE UP GIVE UP!</p>
    <AddWord onAdd={add}/>
    <SearchWord onSearch={search}/>
    <WordList words={words} deleteWord={deleteWord} edit={edit}/>
  </div>
  );

}
ReactDOM.render(<App />, document.getElementById('app'));

