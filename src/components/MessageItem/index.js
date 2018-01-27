import React from 'react';
import parseMessage from 'gmail-api-parse-message';

class MessageItem extends React.PureComponent {
    render() {
        const parsedMessage = parseMessage(this.props.item);
        console.log(parsedMessage);
        return (<div dangerouslySetInnerHTML={{ __html: parsedMessage.textHtml }} >
        </div>);
    }
}

export default MessageItem;