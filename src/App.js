import { useState } from 'react';
import Board from './components/Board';
import styled from 'styled-components';
import Game from './components/Game';

const StyledApp = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f34e40;
  `

  

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  return (
    <StyledApp>
      <Game>
        <div className="game-board">
          <Board />
        </div>
      </Game>
    </StyledApp>
    
  );
}


