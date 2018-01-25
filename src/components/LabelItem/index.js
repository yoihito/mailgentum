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

class LabelItem extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <NavLink 
                activeClassName="LabelItem--active"
                className="LabelItem"
                to={`/dashboard/labels/${item.id}`} >
                <div>
                    { predefinedLabelNames[item.name] || item.name } 
                </div>
            </NavLink>
        )
    }
}

LabelItem.propTypes = {
    item: PropTypes.object
};

export default withRouter(LabelItem);