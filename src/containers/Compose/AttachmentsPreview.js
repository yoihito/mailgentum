import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preview = styled.div`
    width: 140px;
    margin-left: 10px;
`;

const PreviewImg = styled.img`
    height: 140px;
    width: 140px;
    object-fit: cover;
`;

const PreviewText = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

class AttachmentsPreview extends React.Component { 
    render() {
        const { previews, className } = this.props;
        return (<div className={className}>
            { previews.map((preview, index) => (
                <Preview key={`${preview.filename}-${index}`}>
                    <PreviewImg alt="" src={preview.content}/>
                    <PreviewText>
                        { preview.filename }
                    </PreviewText>
                    <button onClick={() => this.props.onRemove(index) }>Remove</button>
                </Preview>
            ))}
        </div>);
    }
}

AttachmentsPreview.propTypes = {
    previews: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};

const StyledAttachmentsPreview = styled(AttachmentsPreview)`
    display: flex;
    margin-top: 10px;
`;

export default StyledAttachmentsPreview;