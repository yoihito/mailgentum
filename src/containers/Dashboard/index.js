import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import { Route, Switch, Redirect } from 'react-router-dom';
import Labels from 'containers/Labels';
import './index.css';

class Dashboard extends React.Component {

    render() {
        const { onSignOut } = this.props;

        return (<div className="Dashboard">
            <DashboardAppBar />
            <div className="Dashboard__content">
                <Switch>
                    <Redirect exact to="/dashboard/labels/INBOX/" from="/dashboard/labels"/>
                    <Route 
                        key="labels"
                        path="/dashboard/labels" 
                        render={(props) => (
                            <Labels key="labels" {...props} onSignOut={onSignOut} />
                        )}  
                    />
                    <Redirect to="/dashboard/labels/INBOX/" />
                </Switch>
            </div>
        </div>);
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired
}

export default Dashboard;