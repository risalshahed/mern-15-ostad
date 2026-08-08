import { useState } from 'react';
import Square from './Square'
import { calculateWinner } from '../utils/calculateWinner';

const Board = () => {
  // const [value, setValue] = useState(Array(9).fill(null));
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Calculate the Winner
  const winner = calculateWinner(squares);
  let status;

  if(winner) {
    status = `Winner: ${winner}`
  } else if(!squares.includes(null)) {
    status = 'Match Draw'
  } else {
    status = `Next Player : ${xIsNext ? 'X' : 'O'}`
  }
  
  // console.log(squares);

  // Update -> setSquares('X') -> squares = 'X'

  const handleClick = (index) => {
    // Prevent toggling on same square
    if(squares[index] || calculateWinner(squares)) {
      return;
    }

    // console.log('clicked');
    const newSquares = [...squares];
    // newSquares[index] = 'X';
    // amra always "X" dibo na, if next move is "X" -> "X", otherwise "O"
    if(xIsNext === true) {
      newSquares[index] = 'X';
    } else {
      newSquares[index] = 'O';
    }
    setSquares(newSquares);
    // Toggle the boolean xIsNext value
    setXIsNext(!xIsNext);

    // let kataNaGolla;
    // if(xIsNext === true) {
    //   setXIsNext(false);
    // } else {
    //   setXIsNext(true)
    // }
  }

  console.log(xIsNext)

  return (
    <div className='max-w-300 mx-auto p-20'>
      <div>
        {status}
      </div>
      <div className='flex'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='flex'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='flex'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default Board;