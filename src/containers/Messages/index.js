import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';

import './index.css';

const ShadowedScrollableList = Shadow(20)(Scrollable(EntitiesList));

class Messages extends React.Component {

    render() {
        const { messages } = this.props.thread;
        const parsedMessages = messages.map(message => parseMessage(message));
        return (
            <div className="Messages">
                <ShadowedScrollableList items={parsedMessages} itemContainer={MessageItem} />
            </div>
        );
    }
}

Messages.propTypes = {
    thread: PropTypes.object.isRequired
}

export default Messages;