import React from 'react';
import './index.css';

const Shadow = (style) => {
    if ( Object.getPrototypeOf(style).prototype && Object.getPrototypeOf(style).prototype.isReactComponent ){
        const Component = style;
        return (props) => (<div className="Shadow"><Component {...props}/></div>);
    }
    return (Component) => (props) => (<div style={style} className="Shadow"><Component {...props}/></div>)
}

export default Shadow;