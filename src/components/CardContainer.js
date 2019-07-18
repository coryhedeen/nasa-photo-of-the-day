import React from 'react';
import Description from './Description';
import Image from './Image';
import Title from './Title';

function CardContainer(props){
  return (
    <div className="cardContainer">
      <Title title={props.data}/>
      <Image image={props.data}/>
      <Description des={props.data} />
    </div>
  )
}
export default CardContainer;
