import React from 'react';
import PropTypes from 'prop-types'

class EmailIframe extends React.Component { 

    constructor(props) {
        super(props);

        this.getIframeContentHeight = this.getIframeContentHeight.bind(this);
        this.setIframeHeight = this.setIframeHeight.bind(this);
    }

    componentDidMount() {
        this.iframe.contentWindow.document.write(this.props.content);
        this.setIframeHeight();
    }

    getIframeContentHeight(iframe) {
        const doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
        const body = doc.body;
        const html = doc.documentElement;
        const height = Math.max( 
            body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );
        return height;
    }

    setIframeHeight() {
        this.iframe.style.height = this.getIframeContentHeight(this.iframe) + 4 + "px";
    }

    render() {
        return (
            <iframe
                title="View email" 
                style={{width: '100%', height: '100px', border: 'none'}} 
                ref={(el) => {this.iframe = el}} 
            />
        );
    }
}

EmailIframe.propTypes = {
    content: PropTypes.string.isRequired
};

export default EmailIframe;