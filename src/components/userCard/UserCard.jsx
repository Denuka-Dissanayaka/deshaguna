import React from 'react'

import {Container} from './Style';

const UserCard = ({img, name, records}) => {
  const images = img;
  //console.log(image)
  return (
    <Container>
      <div className="image">
        <img src={images} alt="" />
      </div>
      <p className='name'>{name}</p>
      <p>Number of Records: <span style={{marginLeft: '15px'}}>{records}</span> </p>
    </Container>
  )
}

export default UserCard
