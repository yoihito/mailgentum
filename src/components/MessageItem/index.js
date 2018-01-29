import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import EmailIframe from 'components/EmailIframe';
import Date from 'components/Date';
import RecipientName from 'components/RecipientName';
import './index.css';

const MessageCollapsedHeader = ({from, snippet, date}) => {
    return (<div className="MessageCollapsedHeader">
        <div className="MessageCollapsedHeader__content">
            <div className="MessageCollapsedHeader__from"><RecipientName from={from} /></div>
            <div className="MessageCollapsedHeader__snippet" dangerouslySetInnerHTML={{__html: snippet}}/>
        </div>
        <div className="MessageCollapsedHeader__date"><Date date={date}/></div>
    </div>);
}

class MessageItem extends React.PureComponent {
    render() {
        const { item } = this.props;
        return (<div className="MessageItem">
            <Collapsible 
                transitionTime={200}
                easing="ease-out"
                trigger={
                    <MessageCollapsedHeader 
                        from={item.headers.from} 
                        snippet={item.snippet} 
                        date={item.headers.date} 
                    />
                }
            >
                <EmailIframe content={item.textHtml || item.textPlain}/>
            </Collapsible>
        </div>);
    }
}

MessageItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default MessageItem;