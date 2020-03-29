import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';


export const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component ={Login} />
            <Route path='*' exact={true} render={ () => <Redirect to='/' />} />
        </Switch>
    )
}       
  