import React from 'react';

import { useHistory } from "react-router-dom";

import './Card.css'

export default function Card(props) {
    const history = useHistory();

    function handleDetail() {
        history.push(`detail/${props.pokemonId}`);
    }

    function handleEdit() {
        history.push(`edit/${props.pokemonId}`);
    }

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
                <button data-testis={props.name} onClick={handleDetail}>DETAILS</button>
                <button onClick={handleEdit}>EDIT</button>
            </div>
            
        </div>
    )
}