import React, { PureComponent } from 'react';
import {
  Route, Redirect, Switch
} from 'react-router-dom';
import SessionsNew from 'containers/SessionsNew';
import Dashboard from 'containers/Dashboard';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isSignedIn: false };
  }

  googleSignInSuccess = (response) => {
    window.gapi.client.init({ discoveryDocs: DISCOVERY_DOCS })
      .then(() => {
        if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
          this.setState({isSignedIn: true});
        } 
      });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" >
            <Redirect to="/sessions/new" />
          </Route>
          <Route 
            path="/sessions/new" 
            render={(props) => {
              if (this.state.isSignedIn) {
                return <Redirect to="/dashboard" />;
              } else {
                return <SessionsNew {...props} onSigninSuccess={this.googleSignInSuccess} />
              }
            }} 
          />
          <Route path="/dashboard" render={(props) => (
            this.state.isSignedIn ? <Dashboard /> : <Redirect to="/sessions/new" />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;