import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import AddWord from './components/addWord.jsx';
import WordList from './components/WordList.jsx';
import axios from 'axios';


const App = () => {
  const [words, setWordList] = useState([]);
  useEffect(() => {
    getWords();
  },[]);

  const getWords = () => {
    return axios.get('/words')
      .then(({data}) => {
        console.log('GET from CLIENT');
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




  return (
  <div>
    <p>Hello, Jonathan you're trash!</p>
    <AddWord onAdd={add}/>
    <WordList words={words}/>
  </div>
  );

}
ReactDOM.render(<App />, document.getElementById('app'));

