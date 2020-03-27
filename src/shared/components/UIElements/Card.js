import React from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
    list-style: none;
    padding: 2px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
    padding: 1rem;
    overflow: hidden;
    margin-top: 100px;
   
`;

const Card = props => {
  return (
    <CardDiv className={`card ${props.className}`} style={props.style}>
      {props.children}
    </CardDiv>
  );
};

export default Card;
