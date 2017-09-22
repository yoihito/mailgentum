import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import ThreadsList from 'components/ThreadsList';
import './index.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        window.gapi.client.gmail.users.threads
            .list({userId: 'me'})
            .then(response => {
                this.setState({
                    threads: response.result.threads
                });
            });
    }

    render() {
        const { threads } = this.state;
        const { onSignOut } = this.props;

        return (<div className="Dashboard">
            <DashboardAppBar onSignOut={onSignOut} />
            <div className="Dashboard-content">
                { threads && <ThreadsList items={threads} />}
            </div>
        </div>);
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired
}

export default Dashboard;