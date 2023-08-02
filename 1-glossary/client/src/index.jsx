import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import AddWord from './components/addWord.jsx';
import WordList from './components/WordList.jsx';
import axios from 'axios';


const App = () => {
  const [words, setWordList] = useState([]);



  const add = (word) => {
    axios.post('/words', {word})
      .then((res) => {
        return getWords();
      })
      .catch(err => {
        console.log(err);
      })
  }


  const getWords = () => {
    return axios.get('/words')
      .then(({data}) => {
        setWordList({data});
      })
  }

  return (
  <div>
    <p>Hello, Jonathan you're trash!</p>
    <AddWord onAdd={add}/>
    <WordList words={words}/>
  </div>
  );

}
ReactDOM.render(<App />, document.getElementById('app'));

