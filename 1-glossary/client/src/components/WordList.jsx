import React, {useState} from 'react';

const WordList = ({words}) => {
  return (
  <div>
  <h4> Word List </h4>
  Currently {words.length} words in the database.
  </div>
  )
}

export default WordList;

