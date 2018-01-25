import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ThreadItem extends React.Component {

    render() {
        const { item } = this.props;
        const lastMessage = item.messages[item.messages.length - 1];
        const isUnread = lastMessage.labelIds.indexOf('UNREAD') !== -1;
        return (
            <div className="ThreadItem">
                <div>
                </div>
                <div 
                    style={{ fontWeight: isUnread ? '700' : '300'}} 
                    dangerouslySetInnerHTML={{ __html: lastMessage.snippet }} 
                />
            </div>
        )
    }
}

ThreadItem.propTypes = {
    item: PropTypes.object
};

export default ThreadItem;