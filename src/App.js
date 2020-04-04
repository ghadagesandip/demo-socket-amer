import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { Routes } from './Routes';
import allReducers from './Reducers/index';
import withSocket from './hocs/withSocket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers( applyMiddleware(logger, thunk)));

class App extends Component {
  
  render() {
    return (
      
      <Provider store={store}>
        {withSocket(
          <BrowserRouter >
            <Routes />
          </BrowserRouter>
        )}
      </Provider>
    );
  }
}

export default App;