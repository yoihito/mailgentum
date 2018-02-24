import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';

const ShadowedScrollableList = styled(Scrollable(Shadow(EntitiesList)))`
    margin: 10px;
`;

class Messages extends React.Component {

    constructor(props) {
        super(props);

        this.markAsRead = this.markAsRead.bind(this);
    }

    componentDidMount() {
        this.markAsRead() 
    }

    componentDidUpdate(prevProps) {
        if (this.props.thread.id !== prevProps.thread.id) {
           this.markAsRead() 
        }
    }

    async markAsRead() {
        const threadsService = new ThreadsService();
        await threadsService.markThreadAsRead({ threadId: this.props.thread.id })
        const thread = await threadsService.getProcessedThread({threadId: this.props.thread.id});
        return this.props.onThreadChanged({ 
            threadId: this.props.thread.id,
            thread
        });
    }

    render() {
        const { className, thread: { messages } } = this.props;
        messages[messages.length - 1].unfolded = true;
        return (
            <div className={className}>
                <ShadowedScrollableList items={messages} itemContainer={MessageItem} />
            </div>
        );
    }
}

Messages.propTypes = {
    className: PropTypes.string.isRequired,
    thread: PropTypes.object.isRequired,
    onThreadChanged: PropTypes.func.isRequired,
}

const StyledMessages = styled(Messages)`
    min-width: 70%;
    background: var(--primary-color-1);
    overflow: auto;
`

export default StyledMessages;