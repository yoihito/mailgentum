import React from 'react';
import PropTypes from 'prop-types';
import Thread from 'components/Thread';

class ThreadsList extends React.Component {
    render() {
        const { items } = this.props;
        
        return (<div className="ThreadsList">
            {
                items.map((item) => <Thread key={item.id} item={item} />)
            }
            
        </div>);
    }
}

ThreadsList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ThreadsList;