import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';

class MessageItem extends React.PureComponent {
    componentDidMount() {
        const parsedMessage = parseMessage(this.props.item);
        this.iframe.contentWindow.document.write(parsedMessage.textHtml || parsedMessage.textPlain);
    }   
    render() {
        return (<iframe title="View email" style={{width: '100%', height: '400px', border: 'none'}} ref={(el) => {this.iframe = el} } >
        </iframe>);
    }
}

MessageItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default MessageItem;