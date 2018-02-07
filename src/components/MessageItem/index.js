import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import EmailIframe from 'components/EmailIframe';
import MessageCollapsedHeader from 'components/MessageCollapsedHeader';
import Date from 'components/Date';
import RecipientName from 'components/RecipientName';
import './index.css';

const MessageHeader = ({date, from, to}) => {
    return (<div className="MessageHeader">
        <div className="MessageHeader__addresses">
            <div className="MessageHeader__from">
                <RecipientName address={from} />
            </div>
            <div className="MessageHeader__to">
                To: <RecipientName address={to} />
            </div>
        </div>
        <div><Date date={date}/></div>
    </div>
    );
}

class MessageItem extends React.PureComponent {
    render() {
        const { item } = this.props;
        return (<div className="MessageItem">
            <Collapsible 
                transitionTime={200}
                open={item.unfolded}
                easing="ease-out"
                trigger={
                    <MessageCollapsedHeader 
                        from={item.headers.from} 
                        snippet={item.snippet} 
                        date={item.headers.date} 
                    />
                }
                triggerWhenOpen={
                    <MessageHeader
                        from={item.headers.from} 
                        date={item.headers.date} 
                        to={item.headers.to}
                    />
                }
            >
                <div className="MessageItem__actions">
                    <span className="MessageItem__actionItem"><i className="fa fa-reply"/> Reply</span>
                    <span className="MessageItem__actionItem"><i className="fa fa-archive"/> Archive</span>
                    <span className="MessageItem__actionItem"><i className="fa fa-ellipsis-h"/> More</span>
                </div>
                <EmailIframe content={item.textHtml || item.textPlain}/>
            </Collapsible>
        </div>);
    }
}

MessageItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default MessageItem;