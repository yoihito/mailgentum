import React from 'react';
import LabelItem from 'components/LabelItem';
import LabelsService from 'services/LabelsService';

class LabelsList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {};
    }

    componentDidMount() {
        const labelsService = new LabelsService();
        labelsService.listLabels().then((labels) => this.setState({ labels }));
    }

    render() {
        const { labels } = this.state;
        
        if (labels) {
            return (<div className="LabelsList">
                {
                    labels
                        .filter((item) => item.labelListVisibility !== 'labelHide')
                        .map((item) => <LabelItem key={item.id} item={item} />)
                }
                
            </div>);
        } else {
            return null;
        }
    }
}

export default LabelsList;