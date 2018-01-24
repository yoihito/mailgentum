import React from 'react';
import './index.css';

const Shadow = (Component) => (props) => (
    <div className="Shadow"><Component {...props}/></div>
)

export default Shadow;