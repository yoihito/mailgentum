import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EntitiesList from 'components/EntitiesList';
import Threads from 'containers/Threads';
import LabelsService from 'apis/LabelsService';
import LabelItem from 'components/LabelItem';
import './index.css';

export default class Labels extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    componentDidMount() {
        this.loadLabels();
    }

    async loadLabels() {
        const labelsService = new LabelsService();
        let labels = await labelsService.listLabels();
        labels = labels.filter((item) => item.labelListVisibility !== 'labelHide');
        this.setState({ labels });
    }

    render() {
        const { location } = this.props;
        const { labels } = this.state;
        return (
            <div className="Labels">
                { labels &&  <EntitiesList items={labels} itemContainer={LabelItem} /> }
                <div className="Labels__threads">
                    <TransitionGroup>
                        <CSSTransition
                            key={location.pathname}
                            timeout={500}
                            classNames="pageSlider"
                            mountOnEnter={false}
                            unmountOnExit={true}
                        >
                            <Switch>
                                <Route path="/dashboard/labels/:labelId" component={Threads} />
                                <Redirect from="/dashboard" to="/dashboard/labels/INBOX"/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}