import React, {useState} from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('ditto');

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    console.log('pokemon', search)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input 
        type="text"
        placeholder="Buscar pokemon"
        onChange={handleChange}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;