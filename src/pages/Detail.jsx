

import React from 'react';
import {useParams, Link} from "react-router-dom";

import {useSelector} from 'react-redux'

import './Detail.css'

export default function Detail() {
    const { id } = useParams();
 
    const pokemon = useSelector(state => state.pokemons.find(pokemon => pokemon.id === id))

      return (
        <div className="container">
          <div className="pokemon-info">
          <p className="name">{pokemon.name}</p>
          <div className="typesWrapper">
              {
                pokemon.types.map(type => (<div key={type}  className="types"><p className="type">{type}</p></div>))
              }
          </div>
          <div className="typesWrapper">
            {
                pokemon.attacks.fast.map((attack, index) => (<div key={`fast${attack.name}`}  className="attack"><p className="attack">{JSON.stringify(attack)}</p></div>))
            }
          </div>
          <div className="typesWrapper">
            {
                pokemon.attacks.special.map((attack, index) => (<div key={`special${attack.name}`}  className="attack"><p className="attack">{JSON.stringify(attack)}</p></div>))
            }
          </div>
          <img src={pokemon.image} className="pokemon-img" loading="lazy"></img>
          </div>
          <Link to={'/'}>INICIO</Link>
        </div>
  )
}