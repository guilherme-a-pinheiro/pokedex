import React, { useContext } from 'react';
import FavoriteContext from '../../contexts/favoritesContext';

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav>
      <div>
        <img 
        alt="pokeapi-logo" 
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        className="navbar-img"
        />
      </div>
      <div>{favoritePokemons.length}❤️</div>
    </nav>
  );
};

export default NavBar;