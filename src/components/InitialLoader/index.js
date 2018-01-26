import React from 'react';
import PropTypes from 'prop-types';
import shuffle from 'lodash.shuffle';
import './index.css';

class InitialLoader extends React.Component {
    static defaultProps = {
        text: 'Mailinator'
    }

    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render() {
        const letters = this.props.text.split('');
        const range = shuffle(letters.map((_, index) => index));
        return <div className="InitialLoader">
            {letters.map((letter, index) => (
                <span key={`${letter}-${index}`} className="letter" style={{animationDelay: `${800 * range[index]}ms`}}>{letter}</span>
            ))}    
        </div>;
    }
}

export default InitialLoader;