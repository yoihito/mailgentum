import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'components/FlatButton';
import Logo from 'components/Logo';
import './index.css';


class DashboardAppBar extends React.Component {

    render() {
        return (
            <header className="DashboardAppBar">
                <div className="DashboardAppBar-left">
                    <Logo />
                </div>
                <div className="DashboardAppBar-right">
                    <FlatButton style={{ height: '100%' }} onClick={this.props.onSignOut}>
                        Sign out
                    </FlatButton>
                </div>
            </header>
        )
    }   

}


export default DashboardAppBar;