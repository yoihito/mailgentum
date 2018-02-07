import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList'
import MessageItem from 'components/MessageItem';

const ShadowedScrollableList = styled(Scrollable(Shadow(EntitiesList)))`
    margin: 10px;
`;

class Messages extends React.Component {

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
    thread: PropTypes.object.isRequired
}

const StyledMessages = styled(Messages)`
    min-width: 70%;
    background: var(--primary-color-1);
    overflow: auto;
`

export default StyledMessages;