import React from 'react';
import TopBarButton from 'components/TopBarButton';
import SearchInput from 'components/SearchInput';
import './index.css';


class DashboardAppBar extends React.Component {

    render() {
        return (
            <header className="DashboardAppBar">
                <div className="DashboardAppBar-left">
                    <TopBarButton><i className="fa fa-paper-plane" /> compose</TopBarButton>
                    <SearchInput />
                </div>
            </header>
        )
    }   

}

export default DashboardAppBar;