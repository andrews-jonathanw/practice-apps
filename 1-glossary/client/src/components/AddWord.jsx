import React, {useState} from 'react';

const Add = ({onAdd}) => {
  const [word, setWord] = useState('');
  const [description, setDesc] = useState('');

  const onChange = (e) => {
    if (e.target.id === 'word') {
      setWord(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  }

  const addWord = () => {
    console.log('adding word');
    onAdd({word: word, description: description});
  }

  return (
    <div>
      <h4>Add a new word!</h4>
      <input placeholder='Enter a new word...' value={name} id='name' onChange={onChange}/>
      <input placeholder='Enter description...' value={description} id='desc' onChange={onChange}/>
      <button onClick={addWord}> Add Word </button>
    </div>
  );

}

export default Add;