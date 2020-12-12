import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'

import Card from '../components/Card'
import './Home.css'

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const [name, setName] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

    useEffect(() => {
      if (!name) {
        setFilteredPokemons(pokemons)
      } else {
        const filteredResult = pokemons?.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
        !name ? setFilteredPokemons(JSON.parse(localStorage.getItem('@pokedex/pokemons'))) : setFilteredPokemons(filteredResult)
      }
    },[name]);
    

    return (
      <>
        <form >
          <label>
            Pokemon Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
     
        </form>
          <div className="pokedex">
            {
              filteredPokemons && filteredPokemons.length > 0 ? (
                filteredPokemons.map((pokemon)=> 
                  (
                    <div key={pokemon.id} className="card-container">
                      <Card  pokemonId={pokemon.id} name={pokemon.name} types={pokemon.types} image={pokemon.image}/>
                    </div>
                  )
                )
              ) : null  
            }
          </div>
      </>
    );
}

