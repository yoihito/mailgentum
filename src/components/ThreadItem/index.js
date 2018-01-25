import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import moment from 'moment';
import './index.css';

class ThreadItem extends React.Component {

    render() {
        const { item } = this.props;
        const isUnread = item.labelIds.indexOf('UNREAD') !== -1;
        return (
            <div className="ThreadItem">
                <div className="ThreadItem__header" style={{ fontWeight: isUnread ? '700' : '300'}} >
                    <div>
                        {item.headers.from}
                    </div>
                    <div>
                        {moment(item.headers.date).fromNow()}
                    </div>
                </div>
                <div style={{ fontWeight: isUnread ? '700' : '300'}} >
                    { item.headers.subject }
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html: item.snippet }} 
                />
            </div>
        )
    }
}

ThreadItem.propTypes = {
    item: PropTypes.object
};

export default ThreadItem;