import React from 'react';
import Square from './Square';
/*function Board (){
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(false);

function handleSquareClick (position)  {
		if (board[position]) {
			return;
		}
		setBoard(prev => {
			return prev.map((square, pos) => {
				if (pos === position) {
					return isXNext ? 'X' : 'O';
				}

				return square;
			});
		});

		setIsXNext(prev => !prev);               //setIsXNext(prev => {    
			                                             //return !prev});        
	                                                 //};    
	};

	 function renderSquare (position ) {
		return ( 
			<Square value = {board[position]}
			onClick = {
				() => handleSquareClick(position)//here it is necessary to pass a function otherwise
				                                 // it will automatically get filled with 0
			}
			/>
		);
	};*/
const Board = ({ board, handleSquareClick }) => {
  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
