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
  


  return (
    <StyledApp>
      <Game>
        <Board />
      </Game>
    </StyledApp>
    
  );
}


