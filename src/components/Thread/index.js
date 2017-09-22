import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Thread extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <div className="Thread">
                <div>
                    
                </div>
                <div>
                    { item.snippet }
                </div>
            </div>
        )
    }
}

Thread.propTypes = {
    item: PropTypes.object
};

export default Thread;