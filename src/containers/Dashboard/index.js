import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Labels from 'containers/Labels';

const DashboardContent = styled.div`
    height: 100%;
    background: var(--white-color);
`

class Dashboard extends React.Component {

    render() {
        const { onSignOut, className } = this.props;

        return (<div className={className}>
            <DashboardAppBar />
            <DashboardContent>
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
            </DashboardContent>
        </div>);
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

const StyledDashboard = styled(Dashboard)`
    height: 100%;
    padding-top: 72px;
`;

export default StyledDashboard;