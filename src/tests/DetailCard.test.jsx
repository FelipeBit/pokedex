
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { pokemonsMock } from './mocks/pokemons.mock'
import DetailCard from '../components/DetailCard';

describe("DetailCard Component", ()=> {
  const mockStore = configureStore()
  let store;

  it('should be able to show details of a pokemon', async () => { 
    store = mockStore({
      type: 'INIT_POKEMON',
      pokemons: pokemonsMock
    })

    render(
        <MemoryRouter>
            <Provider store={store}>
               <DetailCard pokemon={pokemonsMock[0]} />
          </Provider>
        </MemoryRouter>
      )
    
      await waitFor(() => {
        expect(screen.getByTestId('detailCard')).toBeInTheDocument()
      })
    
  })
  
})
