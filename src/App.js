import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import Pokedex from './component/Pokedex';
import { getPokemonData, getPokemons } from './api';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log('fetchPokemons error:', error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex 
      pokemons={pokemons} 
      loading={loading} 
      page={page} 
      totalPages={totalPages} 
      setPage={setPage}
      />
    </div>
  );
}

export default App;
