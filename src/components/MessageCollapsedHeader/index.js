import React from 'react';
import PropTypes from 'prop-types';
import Date from 'components/Date';
import RecipientName from 'components/RecipientName';
import './index.css';

const MessageCollapsedHeader = ({from, snippet, date}) => {
    return (<div className="MessageCollapsedHeader">
        <div className="MessageCollapsedHeader__content">
            <div className="MessageCollapsedHeader__from"><RecipientName address={from} /></div>
            <div className="MessageCollapsedHeader__snippet" dangerouslySetInnerHTML={{__html: snippet}}/>
        </div>
        <div className="MessageCollapsedHeader__date"><Date date={date}/></div>
    </div>);
}

MessageCollapsedHeader.propTypes = {
    from: PropTypes.string,
    snippet: PropTypes.string,
    date: PropTypes.string,
}

export default MessageCollapsedHeader;