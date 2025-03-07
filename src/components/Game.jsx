import React from 'react';
import styled from 'styled-components';

const StyledGame = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  width: fit-content;
`

const Game = ({children}) => {
  return (
    <StyledGame>
      {children}
    </StyledGame>
  );
};

export default Game;