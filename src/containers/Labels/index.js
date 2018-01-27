import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, matchPath } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Scrollable from 'components/Scrollable';
import EntitiesList from 'components/EntitiesList';
import Threads from 'containers/Threads';
import LabelsService from 'apis/LabelsService';
import LabelItem from 'components/LabelItem';
import './index.css';

const ScrollableList = Scrollable(EntitiesList);

class Labels extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    componentDidMount() {
        this.loadLabels();
    }

    async loadLabels() {
        const labelsService = new LabelsService();
        let labels = await labelsService.listDetailLabels();
        labels = labels.filter((item) => item.labelListVisibility !== 'labelHide' && item.id !== 'UNREAD').sort();
        this.setState({ labels });
    }

    render() {
        const { location } = this.props;
        const { labels } = this.state;
        const match = matchPath(location.pathname, { path: '/dashboard/labels/:labelId/'});
        if (labels) {
            return (
                <div className="Labels">
                    <div style={{minWidth: '174px' }} >
                        <ScrollableList itemContainer={LabelItem} items={labels} />
                    </div>
                    <div className="Labels__threads">
                        <TransitionGroup>
                            <CSSTransition
                                classNames="Labels__sliders"
                                key={match.params.labelId}
                                mountOnEnter={true}
                                timeout={500}
                                unmountOnExit={true}
                            >
                                <div className="Labels__switch-container">
                                    <Switch>
                                        <Route path="/dashboard/labels/:labelId" component={Threads} />
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            );
        }
        return null;
    }
}

Labels.propTypes = {
    location: PropTypes.object.isRequired
};

export default Labels;