import React from 'react';
import parseMessage from 'gmail-api-parse-message';

class MessageItem extends React.PureComponent {
    componentDidMount() {
        const parsedMessage = parseMessage(this.props.item);
        this.iframe.contentWindow.document.write(parsedMessage.textHtml);
    }   
    render() {
        return (<iframe style={{width: '100%', height: '400px', border: 'none'}} ref={(el) => {this.iframe = el} } >
        </iframe>);
    }
}

export default MessageItem;