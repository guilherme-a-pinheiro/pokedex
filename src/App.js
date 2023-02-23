import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import Pokedex from './component/Pokedex';

function App() {

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex />
    </div>
  );
}

export default App;
