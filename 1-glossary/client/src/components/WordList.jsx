import React, {useState} from 'react';

const WordList = ({words, deleteWord, edit}) => {

  if ({words}.words.data === undefined) {
    return (
      <div>
      <h4> Word List </h4>
      Currently 0 words in the database.
      </div>
      )
  } else {
    console.log({words}.words.data)
    return (
      <div>
      <h4> Word List </h4>
      Currently {{words}.words.data.length} words in the database.
      {console.log(words.data)}
      <ol>
        {words.data.map((word, index) => {
          return (
            <div className='word-tile' key={index}>
              <li id="word" desc={word.definition}> {word.word} Definition: {word.definition} <button onClick={(e) =>{
                var newDefinition = prompt('Enter a new definition.');
                edit({word, newDefinition});
              }}data-action="edit">edit</button>
              <button value={word.word} onClick={(e) => {
                deleteWord(e);
              }}
              data-action="delete">&#10007;</button></li>

            </div>
          )
        })}
      </ol>
      </div>
      )
  }

}

export default WordList;

