import React from 'react';
import PropTypes from 'prop-types';


const EmptyList = (emptyMessage) => (Component) => {
    function innerComponent({ children, items, ...rest }) {
        if (items && items.length === 0) {
            return (<div style={{
                padding: '12px',
                fontWeight: '300',
                lineHeight: '24px',
                borderBottom: '1px solid #ddd'
            }}>
                {emptyMessage}
            </div>);
        } else {
            return <Component children={children} items={items} {...rest} />;
        }
    }
    innerComponent.propTypes = {
        children: PropTypes.node,
        itemContainer: PropTypes.oneOfType([
            PropTypes.instanceOf(Function), 
            PropTypes.instanceOf(Component)
        ]),
        items: PropTypes.array.isRequired
    }
    return innerComponent;
}


export default EmptyList;