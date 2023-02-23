import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import Pokedex from './component/Pokedex';
import { getPokemonData, getPokemons } from './api';

function App() {

const [loading, setLoading] = useState(false);
const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons error:', error)      
    }
  }

  useEffect(() => {
    console.log('carregou')
    fetchPokemons();
  }, [])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
