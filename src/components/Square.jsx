import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.button`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  `

const Square = ({ value, onSquareClick }) => {
  
  return (
    <StyledSquare onClick={onSquareClick}>
      {value}
    </StyledSquare>
  );
};

export default Square;