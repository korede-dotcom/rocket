import React from 'react'
import styled from 'styled-components';

const Box = ({children, padding, margin, alignItems, justifyContent, flexDirection}) => {
  return (
    <BoxWrapper
        style={{
            padding: padding ? padding : "10px",
            margin: margin ? margin : "10px 20px",
            alignItems: alignItems ? "alignItems" : "center",
            justifyContent: justifyContent ? justifyContent : "space-between",
            flexDirection: flexDirection ? flexDirection : "row",
        }}
    >
            {children}
    </BoxWrapper>
  )
}

export default Box;

const BoxWrapper = styled.div`
    border-radius: 7.733px;
    background: #FFF;
    display: flex;
    min-width: 300px;

    @media screen and (min-width: 550px){
        margin: 10px 10% !important;
    }
`;
