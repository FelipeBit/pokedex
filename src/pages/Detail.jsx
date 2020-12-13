

import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux'

import DetailCard from '../components/DetailCard'
import './Detail.css'

export default function Detail() {
    const { id } = useParams();
 
    const pokemon = useSelector(state => state.pokemons.find(pokemon => pokemon.id === id))

    return (
      <div className="container">
        <DetailCard data-testid="detailCard" pokemon={pokemon}/>
      </div>
  )
}