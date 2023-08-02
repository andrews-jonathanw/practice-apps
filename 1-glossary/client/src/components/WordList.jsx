import React, {useState} from 'react';

const WordList = ({words}) => {
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
              <li id="word" desc={word.definition} onClick={(e) => {
                console.log('clicked', e.target);
              }}> {word.word} Definition: {word.definition} </li>
            </div>
          )
        })}
      </ol>
      </div>
      )
  }

}

export default WordList;

