import React from 'react';
import PropTypes from 'prop-types';
import parseMessage from 'gmail-api-parse-message';
import { Switch, Route } from 'react-router-dom';
import delay from 'utils/delay';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import MonitorLifecycle from 'components/MonitorLifecycle';
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
        this.state = { };
    }

    componentDidMount() {
        this.loadThreads(this.props.match.params);
    }

    async loadThreads({ labelId }) {
        const threadsService = new ThreadsService();
        await delay(500);
        let threads = await threadsService.listDetailedThreads({ labelIds: labelId });
        threads = threads.map((thread) => parseMessage(thread.messages[thread.messages.length - 1]));
        this.setState({ 
            threads: threads.sort((a,b) => b.internalDate - a.internalDate),
        });
    }

    render() {
        const { threads } = this.state;
        return (<div className="Threads">
            {threads && (<div>
                <ShadowedScrollableList itemContainer={ThreadItem} items={threads}  />
                <Switch>
                    <Route path="/dashboard/threads/:threadId" component={Messages}/>
                </Switch>
            </div>) }
            {!threads && React.createElement(Shadow(ThreadItemsLoader))}
        </div>);
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default MonitorLifecycle(Threads);