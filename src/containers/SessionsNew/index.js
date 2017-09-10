import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login/src';
import './SessionsNew.css';

class SessionsNew extends React.Component {

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
            isSignedIn
          />
      </div>
    );
  }
}

SessionsNew.propTypes = {
  onSigninSuccess: PropTypes.func.isRequired
};

export default SessionsNew;