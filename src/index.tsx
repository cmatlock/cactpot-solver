import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class ScratchOff extends React.Component{

  render(){
    return (
      <div className='scratch-off cell'>
        {/* dropdown of numbers 1-9 */}
        <select>
          <option value=''></option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
      </div>
    )
  }
}

class EstimatedResult extends React.Component{
  // each restimated result tracks the state of a particular row of cells
  render(){
    return (
      <div className='estimated-result cell'>
        {/*educated guess*/}
      </div>
    )
  }
}

class Board extends React.Component{
  render(){
    return (
      <div className='board'>
        <div className='cactpot-board'>
          <div className='board-row'>
            <EstimatedResult/>
            <EstimatedResult/>
            <EstimatedResult/>
            <EstimatedResult/>
            <EstimatedResult/>
          </div>
          <div className='board-row'>
            <EstimatedResult/>
            <ScratchOff/>
            <ScratchOff/>
            <ScratchOff/>
            <div className='blank cell'></div>
          </div>
          <div className='board-row'>
            <EstimatedResult/>
            <ScratchOff/>
            <ScratchOff/>
            <ScratchOff/>
            <div className='blank cell'></div>
          </div>
          <div className='board-row'>
            <EstimatedResult/>
            <ScratchOff/>
            <ScratchOff/>
            <ScratchOff/>
            <div className='blank cell'></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
