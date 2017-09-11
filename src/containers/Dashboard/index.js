import React from 'react';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {

    componentDidMount() {
        window.gapi.client.gmail.users.threads
            .list({userId: 'me'})
            .then(threads => {
                console.log(threads);
            });
    }

    render() {
    return <div>
        <h2>Dashboard</h2>
        <button onClick={this.props.onSignOut}>Sign out</button>
      </div>;
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired
}

export default Dashboard;