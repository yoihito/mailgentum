import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import './index.css';

class Threads extends React.Component {

    constructor(props) {
        super(props);

        this.state = { threads: [] };
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
        this.setState({ 
            threads: threads.sort((a,b) => +a.historyId < +b.historyId),
        });
    }

    render() {
        const { threads } = this.state;
        return (<div className="Threads">
            {
                React.createElement(
                    Shadow(Scrollable(EntitiesList)), {
                        items: threads,
                        itemContainer: ThreadItem,
                    }
                )
            }
        </div>);
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default Threads;