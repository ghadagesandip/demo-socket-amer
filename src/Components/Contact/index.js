import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const listItems = this.props.contacts && 
            this.props.contacts.map(contact => <li key={contact.userID}>{contact.userName}</li>)
        return (
            <div className="contactWrapper">
                <ul>
                    contact list
                    {listItems}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        userInfo: store.authReducer.userInfo ? store.authReducer.userInfo : {},
        contacts: store.contactReducer.contacts
    }
}

// function mapDispatchToProps(dispatch){

//     return bindActionCreators({

//     }, dispatch)
// }


export default connect(mapStateToProps)(Contact);
 