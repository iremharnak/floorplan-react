import React from 'react';

function Bath(props){
  return (
    <div className='bath' id={`bath-${props.type}`}>
      {props.type} Bath
    </div>
  )
}

export default Bath;