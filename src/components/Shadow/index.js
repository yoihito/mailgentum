import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Shadow = (Component) => {
    const wrappedComponent = ({ className, ...props }) => (<Component className={`${className} Shadow`} {...props}/>)
    wrappedComponent.propTypes = {
        className: PropTypes.string,
    };

    return wrappedComponent;
}

export default Shadow;