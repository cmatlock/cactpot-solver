import React from 'react';
import ScratchOff from './ScratchOff';
import EstimatedResult from './EstimatedResult';

type BoardState = {
  scratchOffs: Array<any>
}

class Board extends React.Component {
  state: BoardState = {
    scratchOffs: Array(9).fill(null),
  };

  render() {
    return (
      <div className='board'>
        <div className='cactpot-board'>
          <div className='board-row'>
            <EstimatedResult />
            <EstimatedResult />
            <EstimatedResult />
            <EstimatedResult />
            <EstimatedResult />
          </div>
          <div className='board-row'>
            <EstimatedResult />
            <ScratchOff />
            <ScratchOff />
            <ScratchOff />
            <div className='blank cell'></div>
          </div>
          <div className='board-row'>
            <EstimatedResult />
            <ScratchOff />
            <ScratchOff />
            <ScratchOff />
            <div className='blank cell'></div>
          </div>
          <div className='board-row'>
            <EstimatedResult />
            <ScratchOff />
            <ScratchOff />
            <ScratchOff />
            <div className='blank cell'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;