import React from 'react'

import {Container} from './Style';

const RecordCard = ({record, id, email, delFunc}) => {
  return (
    <Container>
      <p>{record}</p>
      <button onClick={() => {delFunc(id,email)}}>Delete</button>
    </Container>
  )
}

export default RecordCard
