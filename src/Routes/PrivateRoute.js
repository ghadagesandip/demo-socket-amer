import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    if(!isLoggedIn) {
        return <Route render={ () => <Redirect to="/login" />} />;  
    } else {
        return <Route {...rest} render={props => <Component {...props} /> } />
    }
}

const mapStateToProps = state => ({
    isLoggedIn : state.authReducer.isLoggedIn ? true : false
})

export default connect(mapStateToProps)(PrivateRoute);