import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import { Route, Switch } from 'react-router-dom';
import ThreadsList from 'containers/ThreadsList';
import LabelsList from 'containers/LabelsList';
import './index.css';

class Dashboard extends React.Component {

    render() {
        const { onSignOut } = this.props;

        return (<div className="Dashboard">
            <DashboardAppBar onSignOut={onSignOut} />
            <div className="Dashboard-content">
                <Switch>
                    <Route 
                        exact 
                        path="/dashboard"
                        render={(props) => {
                            return <LabelsList {...props} />;
                        }}  
                    />
                    <Route 
                        path="/dashboard/labels/:labelId" 
                        component={ThreadsList} 
                    />
                </Switch>
            </div>
        </div>);
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired
}

export default Dashboard;