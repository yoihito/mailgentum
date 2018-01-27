import React from 'react';
import PropTypes from 'prop-types';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';
import './index.css';

const ShadowedScrollableList = Shadow(20)(Scrollable(EntitiesList));

class Messages extends React.Component {

    render() {
        const { messages } = this.props.thread;
        return (
            <div className="Messages">
                <ShadowedScrollableList items={messages} itemContainer={MessageItem} />
            </div>
        );
    }
}

Messages.propTypes = {
    thread: PropTypes.object.isRequired
}

export default Messages;