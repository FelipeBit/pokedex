import React from 'react';


import {
    Link
  } from "react-router-dom";

import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <p className="name">{props.name}</p>
            <div className="typesWrapper">
                    {
                        props.types.map(type => (<div key={type}  className="types"><p className="type">{type}</p></div>))
                    }
            </div>
            <img src={props.image} className="pokemon-img" alt={`pokemon ${props.name}`}></img>
            <div className="buttonsWrapper">
                <Link to={`detail/${props.pokemonId}`}>DETALHES</Link>
                <Link to={`edit/${props.pokemonId}`}>EDITAR</Link>
            </div>
            
        </div>
    )
}