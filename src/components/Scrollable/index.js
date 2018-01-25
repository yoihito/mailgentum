import React from 'react';
import './index.css';

const Scrollable = (Component) => (props) => (
    <div className="Scrollable"><Component {...props}/></div>
)

export default Scrollable;