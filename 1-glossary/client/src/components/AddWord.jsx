import React, {useState} from 'react';

const Add = ({onAdd}) => {
  const [word, setWord] = useState('');
  const [definition, setDesc] = useState('');



  const onChange = (e) => {
    if (e.target.id === 'word') {
      setWord(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  }

  const addWord = (e) => {
    onAdd({word: word, definition: definition});
    setWord('');
    setDesc('');
  }

  return (
    <div>
      <h4>Add a new word!</h4>
      <input placeholder='Enter a new word...' value={word} id='word' onChange={onChange}/>
      <input placeholder='Enter definition...' value={definition} id='desc' onChange={onChange}/>
      <button onClick={addWord}> Add Word </button>
    </div>
  );

}

export default Add;