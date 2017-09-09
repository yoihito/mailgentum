import React from 'react';

export default class Dashboard extends React.Component {

    componentDidMount() {
        window.gapi.client.gmail.users.threads
            .list({userId: 'me'})
            .then(threads => {
                console.log(threads);
            });
    }

    render() {
        return <div>Dashboard</div>;
    }

}