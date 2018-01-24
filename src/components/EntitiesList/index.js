import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LabelsList = ({ items, itemContainer }) => {
    if (items) {
        return (<div>
            {
                items.map((item) => React.createElement(itemContainer, { key: item.id, item }))
            }
            
        </div>);
    } else {
        return null;
    }
}

LabelsList.propTypes = {
    items: PropTypes.array.isRequired,
    itemContainer: PropTypes.oneOfType([
        PropTypes.instanceOf(Function), 
        PropTypes.instanceOf(Component)
    ])
}


export default LabelsList;