import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextAreaField = styled.textarea`
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid var(--grey-color);
    background-color: var(--white-color);
    padding: 5px 10px;
    margin: 10px 0 0 0;
    height: 300px;

    &:first-child {
        margin: 0;
    }

    &:focus {
        border-bottom: 2px solid var(--primary-color-main);
        outline: none;
    }
`

const TextField = styled.input`
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid var(--grey-color);
    background-color: var(--white-color);
    padding: 5px 10px;
    margin: 10px 0 0 0;

    &:first-child {
        margin: 0;
    }

    &:focus {
        border-bottom: 2px solid var(--primary-color-main);
        outline: none;
    }
`;

const PrimaryButton = styled.button`
    border: none;
    background-color: var(--primary-color-main);
    color: var(--white-color);
    padding: 7px 14px; 
    transition: all 0.2s ease-in-out;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
        background-color: var(--primary-color-4);
    }
`;

class ComposeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        this.props.onSubmit(this.state);
    }
    

    render() {
        return (
            <React.Fragment>
                <div className="hidden">
                    <PrimaryButton onClick={this.handleSubmit}>Send</PrimaryButton>            
                </div>
                <TextField name="to" placeholder="To" onChange={this.handleInputChange} />
                <TextField name="subject" placeholder="Subject" onChange={this.handleInputChange} />
                <TextAreaField name="text" onChange={this.handleInputChange} />
                <div>
                    <PrimaryButton onClick={this.handleSubmit}>Send</PrimaryButton>            
                </div>
            </React.Fragment>
        );
    }    
}

ComposeForm.propTypes = {
    onSubmit: PropTypes.func
};

export default ComposeForm;