import React from 'react';
import './index.css';

class SearchInput extends React.Component {

    render() {
        return (
            <div className="SearchInput">
                <input type="text" className="SearchInput-input" placeholder="search messages" {...this.props}/>
                <button className="SearchInput-icon">
                    <i className="fa fa-search" />
                </button>
            </div>
        )
    }

}

export default SearchInput;