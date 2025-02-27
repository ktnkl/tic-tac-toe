import React from 'react';
import styled from 'styled-components';

const StyledBoardRow = styled.section`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`

const BoardRow = ({children}) => {
  return (
    <StyledBoardRow>
      {children}
    </StyledBoardRow>
  );
};

export default BoardRow;