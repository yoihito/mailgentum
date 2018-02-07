import React from 'react';
import PropTypes from 'prop-types';
import Shadow from 'components/Shadow';
import styled from 'styled-components';
import MessagesService from 'apis/MessagesService';
import ComposeForm from './ComposeForm';

class Compose extends React.Component {

    constructor(props) {
        super(props);

        this.submitMessage = this.submitMessage.bind(this);
    }

    async submitMessage(body) {
        try {
            const messagesService = new MessagesService();
            await messagesService.sendMessage(body);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <ComposeForm onSubmit={this.submitMessage}/>
            </div>
        );
    }

}

Compose.propTypes = {
    className: PropTypes.string.isRequired
};

const StyledCompose = styled(Compose)`
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px;
`;

export default Shadow(StyledCompose);