import React from 'react';
import './index.css';

class TopBarButton extends React.Component {
    render() {
        return (
            <button className="TopBarButton" {...this.props} />
        );
    }
}

export default TopBarButton;