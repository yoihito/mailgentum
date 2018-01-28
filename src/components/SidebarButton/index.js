import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

class SidebarButton extends React.PureComponent {

    render() {
        const { onClick, children, fullWidth } = this.props;
        return (
            <button 
                onClick={onClick}
                className={classnames({
                    SidebarButton: true,
                    'SidebarButton--fullWidth': fullWidth
                })}
            >
            {children}
            </button>
        )
    }
}

SidebarButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    fullWidth: PropTypes.bool
};

export default SidebarButton;