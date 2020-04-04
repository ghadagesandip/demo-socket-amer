import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openChatWindow } from './../../Actions/chat.actions';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.contacts!==prevState.contacts){

            return {contacts : nextProps.contacts};
        } else {
            return null;
        }
    }

    openChatWindow(user) {
        this.props.openChatWindow(user)
    }


    componentWillReceiveProps(nextProps){
        this.setState({contacts: nextProps.contacts });
    }

    render() { 
        const contacts = this.state.contacts;
        const listItems = contacts.length ? 
                contacts.map(contact => 
                    <li 
                        key={contact.conversationId}
                        onClick={this.openChatWindow.bind(this, contact)}> 
                    {contact.onModelId.displayName}
                    </li>)
                : 'No records found.'
        return (

            <div className="contactWrapper">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store){
    console.log('contacts ::_>', store)
    return {
        userInfo: store.authReducer.userInfo ? store.authReducer.userInfo : {},
        contacts: store.contactReducer.contacts
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        openChatWindow
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
 