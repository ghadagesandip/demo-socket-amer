import React from 'react'
import {Link } from 'react-router-dom';

class AppHeader extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-inverse header navbar-fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AppHeader;