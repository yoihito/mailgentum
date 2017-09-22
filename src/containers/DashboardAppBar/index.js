import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'components/FlatButton';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { DefaultScreen } from 'components/Responsive';
import './index.css';


class DashboardAppBar extends React.Component {

    render() {
        return (
            <header className="DashboardAppBar">
                <div className="DashboardAppBar-left">
                    <Logo />
                    <SearchInput />
                </div>
                <div className="DashboardAppBar-right">
                    <FlatButton style={{ height: '100%' }} onClick={this.props.onSignOut}>
                        <DefaultScreen>
                            <span className="SignOut">Sign out</span>
                        </DefaultScreen>
                        <i className="fa fa-sign-out" />
                    </FlatButton>
                </div>
            </header>
        )
    }   

}

DashboardAppBar.propTypes = {
    onSignOut: PropTypes.func,
};

export default DashboardAppBar;