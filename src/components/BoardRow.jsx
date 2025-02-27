import React from 'react';

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