import React from 'react';
import { Link } from 'react-router-dom';
import TopBarButton from 'components/TopBarButton';
import SearchInput from 'components/SearchInput';
import './index.css';


class DashboardAppBar extends React.Component {

    render() {
        return (
            <header className="DashboardAppBar">
                <div className="DashboardAppBar-left">
                    <Link to="/labels/compose">
                        <TopBarButton><span className="fa fa-pencil-square-o" /> compose</TopBarButton>
                    </Link>
                    <SearchInput />
                </div>
            </header>
        )
    }   

}

export default DashboardAppBar;