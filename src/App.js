
import React from 'react';
import {ApolloProvider } from '@apollo/client';

import { Provider } from 'react-redux'

import store from './store/index'
import Routes from './Routes'
import Header from './components/Header'
import {client} from './operations/client'

import './App.css';

function App() {

  return (
    <Provider store={store} >
    <ApolloProvider client={client} >
      <div className="container" >
     <Header/>
     <Routes data-testid={'routes'} />
     </div>
    </ApolloProvider>
    </Provider>
  );
}

export default App;
