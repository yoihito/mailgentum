import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login/src';

class SessionsNew extends React.Component {

  render() {
    return (
      
      <GoogleLogin 
        clientId="305264766338-6vsljtlpiv51in5jriifh75u97nq916p.apps.googleusercontent.com" 
        scope="https://mail.google.com/"
        buttonText="Sign in with Google"
        onSuccess={this.props.onSigninSuccess}
        onFailure={(err) => console.log(err)}
        isSignedIn
      />
    );
  }
}

SessionsNew.propTypes = {
  onSigninSuccess: PropTypes.func.isRequired
};

export default SessionsNew;