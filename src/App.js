import socketIOClient from "socket.io-client";
import React, { Component } from 'react';
import { SERVER_ADDRESS } from './constants'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: true,
      endpoint: `${SERVER_ADDRESS}?token='testtoken'`
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("onMessageSent", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    );
  }
}

export default App;