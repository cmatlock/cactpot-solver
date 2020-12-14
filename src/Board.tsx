import React, { useState, BaseSyntheticEvent } from 'react';
import ScratchOff from './ScratchOff';
import EstimatedResult from './EstimatedResult';

function Board(){
  const [scratchOffs, setScratchOffs] = useState(Array(9).fill('0'));

  function handleChange(e:BaseSyntheticEvent){
    console.log(e.target.value);
  }

  function renderScratchOff(i: number){
    return (
      <ScratchOff 
        handleChange={handleChange}
        revealed={scratchOffs[i]}
      />
    )
  }

  return (
    <div className='board'>
      <div className='cactpot-board'>
        <div className='board-row'>
          <EstimatedResult /> {/* 0 4 8*/}
          <EstimatedResult /> {/* 0 3 6*/}
          <EstimatedResult /> {/* 1 4 7*/}
          <EstimatedResult /> {/* 2 5 8*/}
        </div>
        <div className='board-row'>
          <EstimatedResult /> {/* 0 1 2*/}
          {renderScratchOff(0)}
          {renderScratchOff(1)}
          {renderScratchOff(2)}
        </div>
        <div className='board-row'>
          <EstimatedResult /> {/* 3 4 5*/}
          {renderScratchOff(3)}
          {renderScratchOff(4)}
          {renderScratchOff(5)}
        </div>
        <div className='board-row'>
          <EstimatedResult /> {/* 6 7 8*/}
          {renderScratchOff(6)}
          {renderScratchOff(7)}
          {renderScratchOff(8)}
        </div>
        <div className='board-row'>
          <EstimatedResult /> {/* 2 4 6*/}
        </div>
      </div>
    </div>
  );
}

export default Board;