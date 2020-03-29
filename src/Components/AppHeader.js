import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../Actions/auth.actions';

class AppHeader extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    
    logout( ) {
        console.log('logout called')
        this.props.logout();
    }

    render(){
        return(
            <nav className="navbar navbar-inverse header navbar-fixed-top ">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Project name</a>
                </div>
                
                <div className="float-right">
                    <span className="col-md-1">
                    {this.props.name}
                    </span>
                    <button type="button" onClick={this.logout} className="btn btn-danger">Logout</button>
                </div>
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        logout
    }, dispatch)
}
const mapStateToProps = store => ({
    name: store.authReducer && store.authReducer.userinfo ? store.authReducer.userinfo.name: 'sandip'
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);