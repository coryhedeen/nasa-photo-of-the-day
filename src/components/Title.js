import React from 'react';
import { Header } from './StyledComponents';

function Title(props){
  return(
    <div className="title">
      <Header>{props.title.title}</Header>
    </div>
  )
}
export default Title;
