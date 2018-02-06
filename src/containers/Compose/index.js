import React from 'react';
import PropTypes from 'prop-types';
import Shadow from 'components/Shadow';
import styled from 'styled-components';

class Compose extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                Compose
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
`;

export default Shadow(StyledCompose);