import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, matchPath } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SidebarButton from 'components/SidebarButton';
import EntitiesList from 'components/EntitiesList';
import Threads from 'containers/Threads';
import LabelsService from 'apis/LabelsService';
import LabelItem from 'components/LabelItem';
import './index.css';

const PinnedLabels = ['INBOX', 'IMPORTANT', 'STARRED', 'SENT', 'DRAFT', 'SPAM', 'TRASH'];

class Labels extends Component {
    constructor(props) {
        super(props);
        
        this.state = { isLoading: true, isLoaded: false };
    }

    componentDidMount() {
        this.loadLabels();
    }

    async loadLabels() {
        const labelsService = new LabelsService();
        let labels = await labelsService.listDetailLabels();
        let sortedLabels = labels.sort();
        let visibleLabels = sortedLabels.filter((item) => item.labelListVisibility !== 'labelHide' && item.id !== 'UNREAD'); 
        let pinnedLabels = PinnedLabels.map(id => visibleLabels.find(label => label.id === id)).filter(label => label);
        let otherLabels = visibleLabels.filter((item) => !PinnedLabels.includes(item.id));
        this.setState({ pinnedLabels, otherLabels, isLoading: false, isLoaded: true });
    }

    render() {
        const { location, onSignOut } = this.props;
        const { pinnedLabels, otherLabels, isLoaded } = this.state;
        const match = matchPath(location.pathname, { path: '/dashboard/labels/:labelId/'});
        if (isLoaded) {
            return (
                <div className="Labels">
                    <div className="Labels__sidebar" >
                        <div>
                            <EntitiesList itemContainer={LabelItem} items={pinnedLabels} />
                            <EntitiesList itemContainer={LabelItem} items={otherLabels} />
                        </div>
                        <div>
                            <SidebarButton fullWidth onClick={onSignOut}><i className="fa fa-sign-out"/> Sign out</SidebarButton>
                        </div>
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
    location: PropTypes.object.isRequired,
    onSignOut: PropTypes.func.isRequired,
};

export default Labels;