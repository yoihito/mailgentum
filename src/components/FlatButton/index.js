import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class FlatButton extends React.Component {

    render() {
        return (
            <button className="FlatButton" {...this.props} />
        );
    }

}

export default FlatButton;