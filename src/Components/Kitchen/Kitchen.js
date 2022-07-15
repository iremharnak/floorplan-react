import React from 'react';
import Sink from '../Sink/Sink'
import Oven from '../Oven/Oven'

function Kitchen(props){
  return (
    <div className='kitchen'>
      Kitchen
      <Sink />
      <Oven />
    </div>
  );
}

export default Kitchen;