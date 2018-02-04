import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Labels from 'containers/Labels';
import Compose from 'containers/Compose';

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
                    <Redirect exact to="/labels/INBOX/" from="/labels"/>
                    <Route 
                        key="labels"
                        path="/labels"
                        render={(props) => (
                            <Labels key="labels" {...props} onSignOut={onSignOut} />
                        )}  
                    />
                    <Route path="/compose" component={Compose} />
                    <Redirect to="/labels/INBOX/" />
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