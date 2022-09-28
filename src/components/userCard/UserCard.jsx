import React from 'react'

import {Container} from './Style';

const UserCard = ({img, name}) => {
  const images = img;
  //console.log(image)
  return (
    <Container>
      <div className="image">
        <img src={images} alt="" />
      </div>
      <p>{name}</p>
    </Container>
  )
}

export default UserCard
