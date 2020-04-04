import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeChatWindow } from '../../Actions/chat.actions'

class ChatWindow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            chat_windows: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.chat_windows!==prevState.chat_windows){

            return {chat_windows : nextProps.chat_windows};
        } else {
            return null;
        }
    }

    render(){
        const chat_windows = this.state.chat_windows || [];
        const listChatWindows = chat_windows.length ? chat_windows.map(contact => 
                    <li key={contact.conversationId} > 
                        <div>
                            <p>{contact.onModelId.displayName}</p>
                            <div>
                        </div>
                        <div> 
                            <input type="text" value="chat" /> 
                            <button >Send</button>
                        </div>
                        </div>
                    </li>)
                : ' No records found'

        return (

            <div>
                <div>Chat Windo</div>
                <ul>{listChatWindows}</ul>
            </div>
        )
    }
} 

function mapStateToProps(store){
    return {
        chat_windows: store.chatReducers.chat_windows
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        closeChatWindow
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
