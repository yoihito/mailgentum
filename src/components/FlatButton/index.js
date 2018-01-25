import React from 'react';
import './index.css';

class FlatButton extends React.Component {
    render() {
        return (
            <button className="FlatButton" {...this.props} />
        );
    }
}

export default FlatButton;