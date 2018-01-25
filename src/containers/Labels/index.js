import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EntitiesList from 'components/EntitiesList';
import Threads from 'containers/Threads';
import LabelsService from 'apis/LabelsService';
import LabelItem from 'components/LabelItem';
import './index.css';

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
        let labels = await labelsService.listLabels();
        labels = labels.filter((item) => item.labelListVisibility !== 'labelHide');
        this.setState({ labels });
    }

    render() {
        const { location } = this.props;
        const { labels } = this.state;
        return (
            <div className="Labels">
                { labels &&  <EntitiesList itemContainer={LabelItem} items={labels} /> }
                <div className="Labels__threads">
                    <TransitionGroup>
                        <CSSTransition
                            classNames="pageSlider"
                            key={location.pathname}
                            mountOnEnter={false}
                            timeout={500}
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

Labels.propTypes = {
    location: PropTypes.object.isRequired
};

export default Labels;