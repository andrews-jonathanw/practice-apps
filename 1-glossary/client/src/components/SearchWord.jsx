import React, {useState} from 'react';

const Search = ({onSearch}) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const searchWord = (e) => {
    onSearch({word: search});
    setSearch('');
  }

  return (
    <div>
      <h4>Search for a word!</h4>
      <input placeholder='Search glossary...' value={search} id='search' onChange={onChange}/>
      <button onClick={searchWord}> Search Word </button>
    </div>
  );

}

export default Search;