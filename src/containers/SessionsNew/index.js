import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GoogleLogin from 'react-google-login/src';
import InitialLoader from 'components/InitialLoader';
import './index.css';

class SessionsNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoaded: false,
    }
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(response) {
    this.setState({
      isLoading: false,
      isLoaded: true
    }, () => {
      this.props.onSigninSuccess();
    });
  }

  onFailure() {
    this.setState({
      isLoading: false,
      isLoaded: false,
    })
  }

  render() {
    const { isLoading, isLoaded } = this.state;

    return (
      <div className="SessionsNew"> 
        {(isLoading || isLoaded) && <InitialLoader />}
        <GoogleLogin 
          buttonText="Sign in with Google"
          className={
            classnames({
              hidden: isLoading || isLoaded,
              FlatButton: true
            })
          }
          clientId="305264766338-6vsljtlpiv51in5jriifh75u97nq916p.apps.googleusercontent.com" 
          isSignedIn
          onFailure={this.onFailure}
          onSuccess={this.onSuccess}
          scope="https://mail.google.com/ https://www.googleapis.com/auth/pubsub"
        />
      </div>
    );
  }
}

SessionsNew.propTypes = {
  onSigninSuccess: PropTypes.func.isRequired
};

export default SessionsNew;