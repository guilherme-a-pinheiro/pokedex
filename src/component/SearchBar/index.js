import React, {useState} from 'react';

const SearchBar = (props) => {
  const [search, setSearch] = useState('ditto');
  const {onSearchHandler} = props

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    if(e.target.value.length === 0) {
      onSearchHandler(undefined)
    }
  }

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input 
        type="text"
        placeholder="Buscar pokemon"
        onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;