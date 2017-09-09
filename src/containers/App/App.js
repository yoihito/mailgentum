import React, { Component } from 'react';
import GoogleLogin from 'react-google-login/src';
import ThreadsList from 'components/ThreadsList';
import './App.css';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { signedIn: false };
  }

  googleSignInSuccess = (response) => {
    window.gapi.client.init({ discoveryDocs: DISCOVERY_DOCS })
      .then(() => {
        if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
          this.setState({signedIn: true});
        } 
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
          { !this.state.signedIn && (
            <GoogleLogin 
              clientId="305264766338-6vsljtlpiv51in5jriifh75u97nq916p.apps.googleusercontent.com" 
              scope="https://mail.google.com/"
              buttonText="Sign in with Google"
              onSuccess={this.googleSignInSuccess}
              onFailure={(err) => console.log(err)}
            />
          )}
          { this.state.signedIn && (
            <ThreadsList />
          )}
      </div>
    );
  }
}

export default App;