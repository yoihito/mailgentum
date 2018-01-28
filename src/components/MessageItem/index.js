import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import EmailIframe from 'components/EmailIframe';

class MessageItem extends React.PureComponent {
    render() {
        const parsedMessage = parseMessage(this.props.item);
        return (<EmailIframe content={parsedMessage.textHtml || parsedMessage.textPlain}/>);
    }
}

MessageItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default MessageItem;