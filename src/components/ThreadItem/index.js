import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ThreadItem extends React.Component {

    render() {
        const { item } = this.props;
        console.log(item);
        const lastMessage = item.messages[item.messages.length - 1];
        return (
            <div className="ThreadItem">
                <div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: lastMessage.snippet }} />
            </div>
        )
    }
}

ThreadItem.propTypes = {
    item: PropTypes.object
};

export default ThreadItem;