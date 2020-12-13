
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { pokemonsMock } from './mocks/pokemons.mock'
import Detail from '../pages/Detail';

describe("Detail Page", ()=> {
  const mockStore = configureStore()
  let store;

  it('should be able to show details of a pokemon', async () => { 
    store = mockStore({
      type: 'INIT_POKEMON',
      pokemons: pokemonsMock
    })

    const history = createMemoryHistory();
    const route = '/detail';
    history.push(route);


    render(
        <MemoryRouter initialEntries={['detail/UG9rZW1vbjowMDE=']}>
            <Provider store={store}>
                <Route path='detail/:id'><Detail/> </Route> 
            </Provider>
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(screen.getByTestId('detailCard')).toBeInTheDocument()
    })
    
  })
  
})


