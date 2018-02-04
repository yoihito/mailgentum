import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './index.css';

const predefinedLabelNames = {
    INBOX: 'Inbox',
    UNREAD: 'Unread',
    STARRED: 'Starred',
    SPAM: 'Spam',
    DRAFT: 'Draft',
    TRASH: 'Trash',
    SENT: 'Sent',
    CHAT: 'Chat',
    IMPORTANT: 'Important',
    '[Imap]/Archive': 'Archive',
    '[Imap]/Drafts': 'Drafts',
}

class LabelItem extends React.PureComponent {

    render() {
        const { item } = this.props;
        return (
            <NavLink 
                activeClassName="LabelItem--active"
                className={classnames(
                    {
                        LabelItem: true,
                        'LabelItem--unread': item.threadsUnread > 0
                    }
                )}
                to={`/labels/${item.id}/`} >
                <div>
                    { predefinedLabelNames[item.name] || item.name }
                </div>
                <div className="LabelItem__unread-indicator">
                    {item.threadsUnread}
                </div >
            </NavLink>
        )
    }
}

LabelItem.propTypes = {
    item: PropTypes.object
};

export default withRouter(LabelItem);