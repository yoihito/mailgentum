import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import delay from 'utils/delay';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import EmptyList from 'components/EmptyList';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadItemsLoader from 'components/ThreadItemsLoader';
import Messages from 'containers/Messages';

const ScrollableList = styled(Scrollable(EmptyList('There are no conversations with this label.')(EntitiesList)))`
    flex-grow: 1;
`;

const getLastThreadMessages = (threads) => {
    return threads.map((thread) => thread.messages[thread.messages.length - 1])
        .sort((a,b) => b.internalDate - a.internalDate);
}

const makeMapFromEntities = (entities) => {
    return entities.reduce((acc, entity) => {
        acc[entity.id] = entity; 
        return acc;
    }, {});
}

class Threads extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { isLoading: true };

        this.updateThread = this.updateThread.bind(this);
    }

    componentDidMount() {
        this.loadThreads(this.props.match.params);
    }

    async loadThreads({ labelId }) {    
        const threadsService = new ThreadsService();
        await delay(500);
        let threads = await threadsService.listDetailedThreads({ labelIds: labelId });
        const threadsMap = makeMapFromEntities(threads);
        const lastThreadMessages = getLastThreadMessages(threads);
        this.setState({ 
            isLoading: false,
            lastThreadMessages,
            threadsMap,
        });
    }

    updateThread({ threadId, thread }) {
        const prevThreadsMap = this.state.threadsMap;
        prevThreadsMap[threadId] = thread;
        const threads = Object.values(prevThreadsMap);
        const threadsMap = makeMapFromEntities(threads);
        const lastThreadMessages = getLastThreadMessages(threads);
        this.setState({
            lastThreadMessages,
            threadsMap
        })
    }

    render() {
        const { className, match: { params: { labelId } } } = this.props;
        const { lastThreadMessages, isLoading, threadsMap } = this.state;
        return (<div className={className}>
            {!isLoading && [
                (<ScrollableList 
                    key="1" 
                    itemContainer={ThreadItem} 
                    items={lastThreadMessages}
                />),
                (<Switch key="2">
                    <Route 
                        path={`/labels/${labelId}/threads/:threadId`}
                        render={(props) => (
                            <Messages 
                                onThreadChanged={this.updateThread} 
                                thread={threadsMap[props.match.params.threadId]} 
                                {...props}
                            />
                        )}
                    />
                </Switch>)
            ]}
            {isLoading && <ThreadItemsLoader/>}
        </div>);
    }
}

Threads.propTypes = {
    className: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
}

const StyledThreads = styled(Shadow(Threads))`
    background-color: var(--white-color);
    display: flex;
    flex-grow: 1;
`;

export default StyledThreads;