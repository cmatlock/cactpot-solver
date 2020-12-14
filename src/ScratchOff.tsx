import React, { BaseSyntheticEvent } from 'react';

type MyProps = {
  handleChange(e: BaseSyntheticEvent): void;
  revealed: string;
}

function ScratchOff(props: MyProps){

  return (
    <div className='scratch-off cell'>
      <select value={props.revealed} onChange={props.handleChange}>
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