import React from 'react'

import {Container} from './Style';

const UserCard = ({img, name}) => {
  const image = img;
  return (
    <Container>
      <div className="image">
        <img src={image} alt="USER" />
      </div>
      <p>{name}</p>
    </Container>
  )
}

export default UserCard
