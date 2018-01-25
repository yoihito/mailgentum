import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { SlideRight } from 'animate-components';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import 'index.css'

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
        const threads = await threadsService.listThreads({ labelIds: labelId });
        this.setState({ animate: false}, () => {
            this.setState({ 
                threads: threads.sort((a,b) => +a.historyId < +b.historyId),
                animate: true
            });
        });
    }

    render() {
        const { threads, animate } = this.state;
        return (threads ? (<SlideRight style={{width: '100%'}} key={animate}>{React.createElement(
            Shadow(Scrollable(EntitiesList)), {
                items: threads, 
                itemContainer: ThreadItem,
            }
        )}</SlideRight>) : null)
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default Threads;