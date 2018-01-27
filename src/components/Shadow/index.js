import React from 'react';
import './index.css';

const Shadow = (zIndex) => {
    if (typeof zIndex === 'number') {
        return (Component) => (props) => (<div style={{zIndex}} className="Shadow"><Component {...props}/></div>)
    } 
    const Component = zIndex;
    return (props) => (<div className="Shadow"><Component {...props}/></div>);
}

export default Shadow;