import React, { Component } from 'react';
import PropTypes from 'prop-types';

const EntitiesList = ({ className, style, itemContainer, items }) => {
    if (items) {
    return (<div className={className} style={style}>{items.map((item) => React.createElement(itemContainer, { item, key: item.id }))}</div>);
    } else {
        return null;
    }
}

EntitiesList.propTypes = {
    itemContainer: PropTypes.oneOfType([
        PropTypes.instanceOf(Function), 
        PropTypes.instanceOf(Component)
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
    items: PropTypes.array.isRequired
}


export default EntitiesList;