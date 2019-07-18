import React from 'react';
import { Explain } from './StyledComponents';

function Description(props){
  return(
    <div className="description">
      <Explain>{props.des.explanation}</Explain>
    </div>
  )
}

export default Description;
