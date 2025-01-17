import React from 'react';

function Image(props){
  return(
    <div className="image">
      <img src={props.image.url} alt="NASA photo of the day"/>
    </div>
  )
}

export default Image;
