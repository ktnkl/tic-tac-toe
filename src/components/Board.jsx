import React from 'react';
import Square from './Square';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { boardStore } from '../store';
import BoardRow from './BoardRow';

const Board = observer(() => {
  console.log('sms')
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (calculateWinner(boardStore.squares) || boardStore.squares[i]) {
      return;
    }
    console.log(boardStore.xIsNext)
    if (boardStore.xIsNext) {
      boardStore.setSquare(i, 'X')
    } else {
      boardStore.setSquare(i, 'O')
    }
  }

  const winner = calculateWinner(boardStore.squares);
  let status;
  if (winner) {
    status = 'Победитель: ' + winner;
  } else {
    status = 'Следующий: ' + (boardStore.xIsNext ? 'X' : 'O');
  }

  // const StyledBoardRow = styled.section`
  //   &:after {
  //     clear: both;
  //     content: '';
  //     display: table;
  //   }
  // `

  const RestartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 16px;
  `

  return (
    <>
      <div className="status">{status}</div>
      <BoardRow>
        <Square value={boardStore.squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={boardStore.squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={boardStore.squares[2]} onSquareClick={() => handleClick(2)} />
      </BoardRow>
      <BoardRow>
        <Square value={boardStore.squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={boardStore.squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={boardStore.squares[5]} onSquareClick={() => handleClick(5)} />
      </BoardRow>
      <BoardRow>
        <Square value={boardStore.squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={boardStore.squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={boardStore.squares[8]} onSquareClick={() => handleClick(8)} />
      </BoardRow>
      <RestartButton
        onClick={() => boardStore.restart()}
      >
        Новая игра
      </RestartButton>
      
    </>
  );
});

export default Board;