import socketIOClient from "socket.io-client";
import React, { Component } from 'react';
import { withRouter } from "react-router";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { SERVER_ADDRESS } from './constants'
import { Routes } from './Routes';
import allReducers from './Reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers( applyMiddleware(logger, thunk)));

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     response: true,
  //     endpoint: `${SERVER_ADDRESS}?token='testtoken'`
  //   };
  // }

  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   socket.on("onMessageSent", data => this.setState({ response: data }));
  // }

  // render() {
  //   const { response } = this.state;
  //   return (
  //       <div style={{ textAlign: "center" }}>
  //         {response
  //             ? <p>
  //               The temperature in Florence is: {response} °F
  //             </p>
  //             : <p>Loading...</p>}
  //       </div>
  //   );
  // }
}

export default App;