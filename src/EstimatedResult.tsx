import React from 'react';

type MyProps = {
  sum: number
}

function EstimatedResult(props: MyProps){
  // each restimated result tracks the state of a particular row of cells

  return (
    <div className='estimated-result cell'>
      {props.sum}
    </div>
  )
}

export default EstimatedResult;
