import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {

    constructor(props) {
        super(props);
    
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setRef = this.setRef.bind(this);
    }

    onChange(ev) {
        this.props.onChange(ev.target.files[0]);
        this.fileInput.value = '';
    }

    onClick() {
        this.fileInput.click();
    }

    render() {
        return (
            <React.Fragment>
                <input className="hidden" type="file" ref={this.setRef} onChange={this.onChange}/>
                {React.cloneElement(React.Children.only(this.props.children), { onClick: this.onClick })}
            </React.Fragment>
        )
    }

    setRef(fileInput) {
        this.fileInput = fileInput;
    }
}

FileInput.propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default FileInput;