import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import compose from 'lodash.compose';
import FileInput from 'components/FileInput';
import AttachmentsPreview from './AttachmentsPreview';

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
        background-color: var(--primary-color-3);
    }

    &:focus {
        outline: none;
        background-color: var(--primary-color-3);
    }

    &:active {
        background-color: var(--primary-color-4);
    }
`;

const IconButton = styled.button `
    border: none;
    margin: 10px 0 0 10px;
    background-color: var(--white-color);
    color: var(--primary-color-main);
    padding: 7px 14px; 
    font-size: 1.3em;

    &:hover {
        cursor: pointer;
        color: var(--primary-color-3);
    }

    &:focus {
        outline: none;
        color: var(--primary-color-3);
    }

    &:active {
        color: var(--primary-color-4);
    } 
`

const makeAttachment = (event, file) => ({
    content: event.target.result.split('base64,')[1],
    contentType: file.type,
    encoding: 'base64',
    filename: file.name,
});

const makePreview = (event, file) => ({
    filename: file.name,
    content: event.target.result,
    contentType: file.type,
});

const addAttachment = (attachment) => (state) => {
    const attachments = state.attachments.concat(attachment);
    return {
        ...state,
        attachments,
    };
}

const addPreview = (preview) => (state) => {
    const previews = state.previews.concat(preview);
    return {
        ...state,
        previews
    };
}

class ComposeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAttachmentRemove = this.handleAttachmentRemove.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileSelected = this.onFileSelected.bind(this);

        this.state = {
            previews: [],
            attachments: [],
        };
    }

    handleAttachmentRemove(index) {
        const { attachments, previews } = this.state;
        attachments.splice(index, 1);
        previews.splice(index, 1);
        this.setState({ attachments, previews });
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

    onFileSelected(file) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const attachment = makeAttachment(event, file);
            const preview = makePreview(event, file);
            this.setState(compose(addAttachment(attachment), addPreview(preview)));
        };
        fileReader.readAsDataURL(file)
    }
    

    render() {
        const { previews } = this.state;
        return (
            <React.Fragment>
                <TextField name="to" placeholder="To" onChange={this.handleInputChange} />
                <TextField name="subject" placeholder="Subject" onChange={this.handleInputChange} />
                <TextAreaField name="text" onChange={this.handleInputChange} />
                <AttachmentsPreview previews={previews} onRemove={this.handleAttachmentRemove} />
                <div>
                    <PrimaryButton onClick={this.handleSubmit}>Send</PrimaryButton>  
                    <FileInput onChange={this.onFileSelected}>
                        <IconButton><span className="fa fa-paperclip" style={{fontWeight: 'bold'}} /></IconButton>
                    </FileInput>
                </div>
            </React.Fragment>
        );
    }    
}

ComposeForm.propTypes = {
    onSubmit: PropTypes.func
};

export default ComposeForm;