import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import emailAddresses from 'email-addresses';
import Date from 'components/Date';
import './index.css';

class ThreadItem extends React.PureComponent {

    render() {
        const { item, match: { params: { labelId } } } = this.props;
        const isUnread = item.labelIds.indexOf('UNREAD') !== -1;
        const parsedFromHeader = emailAddresses.parseOneAddress(item.headers.from);
        return (
            <NavLink 
                className={classnames({
                    ThreadItem: true,
                    'ThreadItem--unread': isUnread
                })}
                activeClassName="ThreadItem--active"
                to={`/dashboard/labels/${labelId}/threads/${item.threadId}`}
            >
                <div className="ThreadItem__header">
                    <div className="ThreadItem__unread-indicator"/>
                    <div className="ThreadItem__contributors">
                        {parsedFromHeader.name || parsedFromHeader.address}
                    </div>
                    <div className="ThreadItem__subject" >
                        { item.headers.subject }
                    </div>
                </div>
                <div className="ThreadItem__date">
                    <Date date={item.headers.date}/>
                </div>
            </NavLink>
        )
    }
}

ThreadItem.propTypes = {
    item: PropTypes.object.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            labelId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default withRouter(ThreadItem);