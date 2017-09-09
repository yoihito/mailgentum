import React from 'react';

export default class ThreadsList extends React.Component {

    componentDidMount() {
        window.gapi.client.gmail.users.threads
            .list({userId: 'me'})
            .then(threads => {
                console.log(threads);
            });
    }

    render() {
        return <div />;
    }

}