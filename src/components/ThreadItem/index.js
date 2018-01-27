import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink, withRouter } from 'react-router-dom';
import resolvePathname from 'resolve-pathname';
import './index.css';

class ThreadItem extends React.Component {

    render() {
        const { item, match: { params: { labelId } } } = this.props;
        const isUnread = item.labelIds.indexOf('UNREAD') !== -1;
        return (
            <NavLink 
                className="ThreadItem"
                activeClassName="ThreadItem--active"
                to={`/dashboard/labels/${labelId}/threads/${item.id}`}
            >
                <div className="ThreadItem__header" style={{ fontWeight: isUnread ? '600' : '300'}} >
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