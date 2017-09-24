import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

class LabelItem extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <Link to={`/dashboard/labels/${item.id}`} className="LabelItem">
                <div>
                    
                </div>
                <div>
                    { item.name }
                </div>
            </Link>
        )
    }
}

LabelItem.propTypes = {
    item: PropTypes.object
};

export default LabelItem;