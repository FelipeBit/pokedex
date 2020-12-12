
import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/Home'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe("Home Page", ()=> {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store,wrapper

  it('should be able to search a pokemon', () => { 
    store = mockStore(initialState)
    const { debug } = render(<Provider store={store}><Home /></Provider>)

    debug();

    //expect(getByText('Hello Worldd!')).not.toBeNull()
  })


})
