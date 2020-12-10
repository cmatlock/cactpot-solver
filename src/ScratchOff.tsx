import React, { useState, BaseSyntheticEvent } from 'react';

function ScratchOff(){
  const [revealed, setRevealed] = useState('0');

  function handleChange(e:BaseSyntheticEvent){
    setRevealed(e.target.value);
  }

  return (
    <div className='scratch-off cell'>
      <select value={revealed} onChange={handleChange}>
        <option value='0'>-</option>
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

export default ScratchOff;