import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../Containers/Home';
import Login from './../Containers/Login';
import { PrivateRoute } from './PrivateRoute';


export const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component ={Login} />
        </Switch>
    )
}       
  