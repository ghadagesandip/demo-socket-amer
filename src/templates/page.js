import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppHeader from './../Components/AppHeader';
import { getContacts } from './../Actions/contact.actions'
 
class PageTemplate extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('this.props.userId', this.props.userId)
        this.props.getContacts(this.props.userId)
    }
    
    render() {
        return (
            <div className="container-fluid">
                 <AppHeader />
                 {this.props.children}
            </div>
        );
    }
}


 

const mapStateToprops = store => ({
    userId: store.authReducer.userInfo.user.userID
})

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        getContacts,
    }, dispatch)
}


export default connect(mapStateToprops, mapDispatchToProps)(PageTemplate);