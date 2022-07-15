import React from 'react';

function Bedroom(props){
  return (
    <div className='bedroom' id={`room-${props.room}`}>
      Bedroom
      {props.room}
    </div>
  )
}

export default Bedroom;