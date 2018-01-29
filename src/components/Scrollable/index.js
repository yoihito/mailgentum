import React from 'react';
import './index.css';

const Scrollable = (Component) => ({scrollableStyle, ...props}) => (
    <div className="Scrollable" style={scrollableStyle}><Component {...props}/></div>
)

export default Scrollable;