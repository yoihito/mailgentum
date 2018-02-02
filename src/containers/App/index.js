import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import SessionsNew from 'containers/SessionsNew';
import Dashboard from 'containers/Dashboard';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isSignedIn: false };
  }

  componentDidMount() {
    this.setState({
      initialLocation: this.props.location
    });
  }

  googleSignInSuccess = () => {
    window.gapi.client.init({ discoveryDocs: DISCOVERY_DOCS })
      .then(() => {
        if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
          this.setState({isSignedIn: true});
        } 
      });
  }

  googleSignOut = () => {
    window.gapi.auth2.getAuthInstance().signOut().then(() => {
      this.setState({isSignedIn: false});
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <Switch>
          <Route 
            path="/sessions/new" 
            render={(props) => {
              if (this.state.isSignedIn) {
                if (this.state.initialLocation.pathname === '/sessions/new') {
                  return <Redirect to="/" />;
                } else {
                  return <Redirect to={this.state.initialLocation.pathname} />;
                }
              } else {
                return <SessionsNew {...props} onSigninSuccess={this.googleSignInSuccess} />
              }
            }} 
          />
          <Route path="/dashboard" render={(props) => {
            if (this.state.isSignedIn) {
              return <Dashboard onSignOut={this.googleSignOut} />;
            } else {
              return <Redirect to="/sessions/new" />;
            }
          }} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  className: PropTypes.string.isRequired
};

const StyledApp = styled(App)`
  height: 100%;
`;

export default withRouter(StyledApp);