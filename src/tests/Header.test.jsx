
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { pokemonsMock } from './mocks/pokemons.mock'
import Header from '../components/Header';

describe("Header Component", ()=> {
  const mockStore = configureStore()
  let store;

  it('should be able to show header', async () => { 
    store = mockStore({
      type: 'INIT_POKEMON',
      pokemons: pokemonsMock
    })

    render(
        <MemoryRouter>
            <Provider store={store}>
               <Header/>
          </Provider>
        </MemoryRouter>
      )
    
      await waitFor(() => {
        expect(screen.getByTestId('header')).toBeInTheDocument()
      })
    
  })
  
})
