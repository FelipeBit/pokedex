

import React from 'react';
import { useHistory } from "react-router-dom";

import './DetailCard.css'

export default function DetailCard({pokemon}) {
      const history = useHistory();

      function handleBackHome() {
        history.push("/");
      }
 
      return (
            <div data-testid='detailCard' className="detail-card">
                <section className="name-and-image">
                    <h1>{pokemon.name}</h1>
                    <div className="pokemon-image">
                        <img src={pokemon.image} alt={`pokemon ${pokemon.image}`} className="pokemon-img-detail" loading="lazy"/>
                    </div>
                    <button onClick={handleBackHome}>BACK TO HOME PAGE</button>
                </section>
                <section className='pokemon-info'>
                    <h1>POKEMON INFO</h1>
                    <section>
                        <h3>TYPES</h3>
                        <div className="info-wrapper">
                            {
                                pokemon.types.map(type => (<div key={type} className="types"><p className="type">{type}</p></div>))
                            }
                        </div>
                    </section>
                    <section>
                        <h2>ATTACKS</h2>
                        <section>
                            <h3>FAST</h3>
                            <div className="info-wrapper">
                                {
                                    pokemon.attacks.fast.map((attack, index) => (<div key={`fast${attack.name}`} className="attack">
                                                                                    <p className="attack">{`Name: ${attack.name}`}</p>
                                                                                    <p className="attack">{`Type: ${attack.type}`}</p>
                                                                                    <p className="attack">{`Damage: ${attack.damage}`}</p>
                                                                                </div>))
                                }
                            </div>
                        </section>
                        <section>
                            <h3>SPECIAL</h3>
                            <div className="info-wrapper"> 
                                {
                                    pokemon.attacks.special.map((attack, index) => (<div key={`special${attack.name}`} className="attack">
                                                                                        <p className="attack">{`Name: ${attack.name}`}</p>
                                                                                        <p className="attack">{`Type: ${attack.type}`}</p>
                                                                                        <p className="attack">{`Damage: ${attack.damage}`}</p>
                                                                                    </div>))
                                }
                            </div>
                        </section>
                    </section>
                </section>
          </div>        
        )
}