import React from 'react';
import Description from './Description';
import Image from './Image';
import Title from './Title';
import Copyright from './Copyright';
import Container from '@material-ui/core/Container';

function CardContainer(props){
  return (
    <Container maxWidth='sm'>
      <Title title={props.data}/>
      <Copyright copy={props.data}/>
      <Image image={props.data}/>
      <Description des={props.data} />

    </Container>
  )
}
export default CardContainer;
