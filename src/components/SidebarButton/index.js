import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SidebarButton extends React.PureComponent {

    render() {
        const { onClick, children } = this.props;
        return (
            <button 
                onClick={onClick}
                className="SidebarButton"          
            >
            {children}
            </button>
        )
    }
}

SidebarButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default SidebarButton;