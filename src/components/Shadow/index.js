import styled from 'styled-components';

const Shadow = (Component) => {
    const styledComponent = styled(Component)`
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
    `
    return styledComponent;
}

export default Shadow;