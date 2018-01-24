import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadsService from 'apis/ThreadsService';

class ThreadsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.loadThreads(this.props.match.params);
    }

    componentWillReceiveProps({ match }) {
        if (!isEqual(match.params, this.props.match.params)) {
            this.loadThreads(match.params);
        }
    }

    async loadThreads({ labelId }) {
        const threadsService = new ThreadsService();
        const threads = await threadsService.listThreads({ labelIds: labelId });
        console.log(threads);
        this.setState({ threads: threads.sort((a,b) => +a.historyId < +b.historyId) });
    }

    render() {
        const { threads } = this.state;
        
        if (threads) {
            return (
                <EntitiesList items={threads} itemContainer={ThreadItem} />
            );
        } else {
            return null;
        }
    }
}

ThreadsList.propTypes = {
    match: PropTypes.object.isRequired
}

export default ThreadsList;