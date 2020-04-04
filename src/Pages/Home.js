import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './../Components/Contact';
import PageTemplate from './../templates/page';
import ChatWindow from './../modules/ChatWindow';
 
class Home extends Component {
    render() { 
        return (
          <PageTemplate>
              <div className="row">
                <div className="col-sm-10">
                    Homes
                    <div className="row">
                      <div className="col-md-12">
                        <ChatWindow />
                      </div>
                    </div>   
                </div>
                <div className="col-sm-2">
                  <Contact/>
                </div>
              </div>
          </PageTemplate>
        );
    }
}

function mapStateToProps(store){
  return {
      userInfo: store.authReducer.userInfo ? store.authReducer.userInfo : {},
      loginError: store.authReducer.errorMessage,
      loggingIn: store.authReducer.loggingIn,
      isLoggedIn: store.authReducer.isLoggedIn
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);