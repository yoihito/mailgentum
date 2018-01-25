import React, { Component } from 'react';
import PropTypes from 'prop-types';

const EntitiesList = ({ itemContainer, items }) => {
    if (items) {
        return (<div>
            {
                items.map((item) => React.createElement(itemContainer, { item, key: item.id }))
            }
            </div>);
    } else {
        return null;
    }
}

EntitiesList.propTypes = {
    itemContainer: PropTypes.oneOfType([
        PropTypes.instanceOf(Function), 
        PropTypes.instanceOf(Component)
    ]),
    items: PropTypes.array.isRequired
}


export default EntitiesList;