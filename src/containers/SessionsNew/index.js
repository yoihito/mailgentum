import React, { Component } from 'react';
import GoogleLogin from 'react-google-login/src';
import ThreadsList from 'components/ThreadsList';
import './SessionsNew.css';

class SessionsNew extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Gmail Client</h2>
        </div>
          <GoogleLogin 
            clientId="305264766338-6vsljtlpiv51in5jriifh75u97nq916p.apps.googleusercontent.com" 
            scope="https://mail.google.com/"
            buttonText="Sign in with Google"
            onSuccess={this.props.onSigninSuccess}
            onFailure={(err) => console.log(err)}
          />
      </div>
    );
  }
}

export default SessionsNew;