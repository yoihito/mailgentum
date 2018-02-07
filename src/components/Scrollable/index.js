import styled from 'styled-components';

const Scrollable = (Component) => {
    const styledComponent = styled(Component)`
        overflow: auto;
    `;
    return styledComponent;
}

export default Scrollable;