import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

class ThreadItem extends React.PureComponent {

    render() {
        const { item, match: { params: { labelId } } } = this.props;
        const isUnread = item.labelIds.indexOf('UNREAD') !== -1;
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
                    <div>
                        {item.headers.from}
                    </div>
                    <div className="ThreadItem__subject" >
                        { item.headers.subject }
                    </div>
                </div>
                <div>
                    {moment(item.headers.date).fromNow()}
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