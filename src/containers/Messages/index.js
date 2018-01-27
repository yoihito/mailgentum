import React from 'react';
import PropTypes from 'prop-types';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';

const ScrollableList = Scrollable(EntitiesList);

class Messages extends React.Component {

    render() {
        const { messages } = this.props.thread;
        return <ScrollableList items={messages} itemContainer={MessageItem} />;
    }
}

Messages.propTypes = {
    thread: PropTypes.object.isRequired
}

export default Shadow(Messages);