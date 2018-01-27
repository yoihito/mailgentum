import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import { Switch, Route } from 'react-router-dom';
import delay from 'utils/delay';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EmptyList from 'components/EmptyList';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadItemsLoader from 'components/ThreadItemsLoader';
import Messages from 'containers/Messages';
import './index.css';

const ShadowedScrollableList = Shadow(Scrollable(EmptyList('There are no conversations with this label.')(EntitiesList)));

class Threads extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        this.loadThreads(this.props.match.params);
    }

    async loadThreads({ labelId }) {
        const threadsService = new ThreadsService();
        await delay(500);
        let threads = await threadsService.listDetailedThreads({ labelIds: labelId });
        const lastThreadMessages = threads.map((thread) => parseMessage(thread.messages[thread.messages.length - 1]));
        const threadsMap = threads.reduce((acc, thread) => {
            acc[thread.id] = thread; 
            return acc;
        }, {});
        this.setState({ 
            isLoading: false,
            lastThreadMessages: lastThreadMessages.sort((a,b) => b.internalDate - a.internalDate),
            threads: threadsMap
        });
    }

    render() {
        const { match: { params: { labelId } } } = this.props;
        const { lastThreadMessages, isLoading, threads } = this.state;
        return (<div className="Threads">
            {!isLoading && (<div style={{ height: '100%'}}>
                <ShadowedScrollableList itemContainer={ThreadItem} items={lastThreadMessages}  />
                <Switch>
                    <Route 
                        path={`/dashboard/labels/${labelId}/threads/:threadId`} 
                        render={(props) => <Messages thread={threads[props.match.params.threadId]} {...props}/>}
                    />
                </Switch>
            </div>) }
            {isLoading && React.createElement(Shadow(ThreadItemsLoader))}
        </div>);
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default Threads;