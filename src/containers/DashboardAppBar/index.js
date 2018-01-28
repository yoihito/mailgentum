import React from 'react';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import './index.css';


class DashboardAppBar extends React.Component {

    render() {
        return (
            <header className="DashboardAppBar">
                <div className="DashboardAppBar-left">
                    <Logo />
                    <SearchInput />
                </div>
            </header>
        )
    }   

}

export default DashboardAppBar;