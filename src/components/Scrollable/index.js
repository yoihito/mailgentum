import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Scrollable = (Component) => {
    const wrappedComponent = ({ className, ...props }) => (<Component className={`${className} Scrollable`} {...props}/>)
    wrappedComponent.propTypes = {
        className: PropTypes.string,
    };

    return wrappedComponent;
}

export default Scrollable;