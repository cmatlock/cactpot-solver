import React, { useState } from 'react';
import ScratchOff from './ScratchOff';
import EstimatedResult from './EstimatedResult';

function Board(){
  const [scratchOffs, setScratchOffs] = useState(Array(9).fill('0'));

  function handleChange(e:string, i:number){
    let scratchOffsCopy = scratchOffs.slice(); // deep copy
    scratchOffsCopy[i] = e;
    setScratchOffs(scratchOffsCopy);

    // error handling
      // duplicate numbers: mark duplicates as red? just border for simplicity
      // too many revealed: mark last revealed as red? again just border for simplicity
  }

  function renderScratchOff(i: number){
    return (
      <ScratchOff 
        handleChange={handleChange}
        revealed={scratchOffs[i]}
        id={i}
      />
    )
  }

  function renderEstimatedResult(watched: Array<number>){
    let sum = watched.reduce((sum,current) => sum + Number(scratchOffs[current]), 0)
    return (
      <EstimatedResult
        sum={sum}
      />
    )
  }

  return (
    <div className='board'>
      <div className='cactpot-board'>
        <div className='board-row'>
          {renderEstimatedResult([0,4,8])}
          {renderEstimatedResult([0,3,6])}
          {renderEstimatedResult([1,4,7])}
          {renderEstimatedResult([2,5,8])}
        </div>
        <div className='board-row'>
          {renderEstimatedResult([0,1,2])}
          {renderScratchOff(0)}
          {renderScratchOff(1)}
          {renderScratchOff(2)}
        </div>
        <div className='board-row'>
          {renderEstimatedResult([3,4,5])}
          {renderScratchOff(3)}
          {renderScratchOff(4)}
          {renderScratchOff(5)}
        </div>
        <div className='board-row'>
          {renderEstimatedResult([6,7,8])}
          {renderScratchOff(6)}
          {renderScratchOff(7)}
          {renderScratchOff(8)}
        </div>
        <div className='board-row'>
          {renderEstimatedResult([2,4,6])}
        </div>
      </div>
    </div>
  );
}

export default Board;
