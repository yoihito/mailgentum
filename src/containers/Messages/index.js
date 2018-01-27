import React from 'react';

class Messages extends React.Component {

    render() {
        console.log(this.props.thread);
        return <div>Messages</div>;
    }
}

export default Messages;