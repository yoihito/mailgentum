import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { SlideRight } from 'animate-components';
import ThreadItem from 'components/ThreadItem';
import EntitiesList from 'components/EntitiesList';
import ThreadsService from 'apis/ThreadsService';
import Shadow from 'components/Shadow';
import Scrollable from 'components/Scrollable';
import './index.css';

const SlideRightStyles = {
    width: '100%', 
    height: '100%',
    background: 'white',
}

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
        this.setState({ 
            threads: threads.sort((a,b) => +a.historyId < +b.historyId),
            animate: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    animate: false,
                    oldThreads: this.state.threads,
                });
            }, 1000);
        });
    }

    render() {
        const { oldThreads, threads, animate } = this.state;
        const result = [];

        if (oldThreads) {
            result.push((<div className="Threads__old">{React.createElement(
                Shadow(Scrollable(EntitiesList)), {
                    items: oldThreads, 
                    itemContainer: ThreadItem,
                }
            )}</div>));
        }

        if (threads && animate) {
            result.push((
                <SlideRight style={SlideRightStyles} key={animate}>
                    {React.createElement(
                        Shadow(Scrollable(EntitiesList)), {
                            items: threads, 
                            itemContainer: ThreadItem,
                        }
                    )}
                </SlideRight>
            ));
        }

        return <div className="Threads">
            {result}
        </div>;
        
    }
}

Threads.propTypes = {
    match: PropTypes.object.isRequired
}

export default Threads;