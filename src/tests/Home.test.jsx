
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Home from '../pages/Home'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { pokemonsMock } from '../tests/mocks/pokemons.mock'

describe("Home Page", ()=> {
  const mockStore = configureStore()
  let store;

  it('should be able to find a pokemon', async () => { 
    store = mockStore({
      type: 'INIT_POKEMON',
      pokemons: pokemonsMock
    })
   
    render(<MemoryRouter><Provider store={store}><Home /></Provider></MemoryRouter>)
    const input = screen.getByPlaceholderText('Enter a name...');

    fireEvent.change(input, { target: { value: "Charizard" } });

    await waitFor(() => {
      expect(screen.getByTestId('Charizard')).toBeInTheDocument()
    })
  })

})
