import React from 'react';
import { Sun } from './StyledComponents';

function Image(props){
  return(
    <div className="image">
      <Sun src={props.image.url} alt="NASA photo of the day"/>
    </div>
  )
}

export default Image;
