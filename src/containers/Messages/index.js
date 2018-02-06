import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import styled from 'styled-components';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';

import './index.css';

const ShadowedScrollableList = styled(Scrollable(Shadow(EntitiesList)))`
    margin: 10px;
`;


class Messages extends React.Component {

    render() {
        const { messages } = this.props.thread;
        const parsedMessages = messages.map(message => parseMessage(message));
        parsedMessages[parsedMessages.length - 1].unfolded = true;
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