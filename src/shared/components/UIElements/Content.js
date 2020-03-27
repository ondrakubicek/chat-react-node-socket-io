import React from 'react';
import styled, {keyframes} from 'styled-components';

const ContentDiv = styled.div`
   margin:auto;
   margin-top: 4rem;
   max-width: 800px;
`;

const Content = props => {
    return (
        <ContentDiv className={`content ${props.className}`} style={props.style}>
            {props.children}
        </ContentDiv>
    );
};

export default Content;
