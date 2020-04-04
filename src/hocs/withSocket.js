import React from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";

import { SERVER_ADDRESS } from './../constants'

const withSocket = (Component) => {

    class Socket extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
              socket: null,
              response: {},
            };
            this.socketHandshake(props);
        }

       
        componentWillReceiveProps(newProps) {
            this.socketHandshake(newProps);
        }

        socketHandshake = newProps => {
            const { socket } = this.state;
            if(!socket) {
                const _socket = this.createSocket();

                _socket.on('connect', () => {

                    _socket.on("onConnectionReady", data => {
                        console.log('data receoved', data)
                        this.setState({ response: data })
                    });

                    
                    this.setState({ socket: _socket });

                })

              
                _socket.on('disconnect', () => {
                    _socket.off();
                    this.setState({ socket: null });
                });

            }
        }

        createSocket = () => socketIOClient(`${SERVER_ADDRESS}`);

        render() {
            return Component;
        }
    }

   
    const mapStateToProps = store => ({

    })

    const EnhancedComponent = connect(mapStateToProps)(Socket);

    return <EnhancedComponent />
}

export default withSocket

