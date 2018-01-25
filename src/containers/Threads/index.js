import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import parseMessage from 'gmail-api-parse-message';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadItemsLoader from 'components/ThreadItemsLoader';
import './index.css';

const ShadowedScrollableList = Shadow(Scrollable(EntitiesList));

class Threads extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
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
        let threads = await threadsService.listThreads({ labelIds: labelId });
        threads = threads.map((thread) => parseMessage(thread.messages[thread.messages.length - 1]));
        this.setState({ 
            threads: threads.sort((a,b) => +a.internalDate < +b.internalDate),
        });
    }

    render() {
        const { threads } = this.state;
        return (<div className="Threads">
            {threads && <ShadowedScrollableList itemContainer={ThreadItem} items={threads}  /> }
            {!threads && React.createElement(Shadow(ThreadItemsLoader))}
        </div>);
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default Threads;