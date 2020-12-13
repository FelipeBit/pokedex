
import React from 'react'
import { render, fireEvent, waitFor, screen} from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { pokemonsMock } from './mocks/pokemons.mock'
import Edit from '../pages/Edit';

describe("Edit Page", ()=> {
  const mockStore = configureStore()
  let store;

  it('should be able to save a pokemon', async () => { 
    store = mockStore({
      type: 'INIT_POKEMON',
      pokemons: pokemonsMock
    })

    const history = createMemoryHistory();
    const route = '/edit';
    
    history.push(route);

    const {debug} = render(
        <MemoryRouter initialEntries={['edit/UG9rZW1vbjowMDE=']}>
            <Provider store={store}>
                <Route path='edit/:id'><Edit/> </Route> 
            </Provider>
        </MemoryRouter>
    );

    const button = screen.getByTestId('savePokemon');

    fireEvent.click(button);
    
    await waitFor(() => {
        expect(screen.getByText('Salvo com sucesso!')).toBeInTheDocument()
    })


  })
  
})


