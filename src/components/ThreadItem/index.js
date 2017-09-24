import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ThreadItem extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <div className="ThreadItem">
                <div>
                    
                </div>
                <div>
                    { item.snippet }
                </div>
            </div>
        )
    }
}

ThreadItem.propTypes = {
    item: PropTypes.object
};

export default ThreadItem;