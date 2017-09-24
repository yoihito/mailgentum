import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from 'components/ThreadItem';
import ThreadsService from 'services/ThreadsService';

class ThreadsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { params } = this.props.match;
        const threadsService = new ThreadsService();
        threadsService.listThreads({ labelIds: params.labelId })
            .then((threads) => this.setState({ threads }));
    }

    render() {
        const { threads } = this.state;
        
        if (threads) {
            return (<div className="ThreadsList">
                {
                    threads.map((item) => <ThreadItem key={item.id} item={item} />)
                }
                
            </div>);
        } else {
            return null;
        }
    }
}

ThreadsList.propTypes = {
    match: PropTypes.object.isRequired
}

export default ThreadsList;