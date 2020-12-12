import React, { Switch } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useQuery  } from '@apollo/client';
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as PokemonActionsCreators from './store/modules/pokemons/actions'

import {GET_ALL_POKEMONS} from './operations/queries/getAllPokemons'

import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Home from './pages/Home'

function Routes() {
  const pokemonsActions = bindActionCreators(PokemonActionsCreators, useDispatch())

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  pokemonsActions.initPokemon(data.pokemons);

  return (
      <Router>
        <Switch  >
          <Route exact path="/" children={<Home />}/>
          <Route path="/detail/:id" children={<Detail/>}/>
          <Route path="/edit/:id" children={<Edit/>}/>
        </Switch>    
      </Router>
  );
}

export default Routes;
