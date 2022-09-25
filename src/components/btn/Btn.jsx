import React from 'react';

import { Button } from './Style'

const Btn = ({name , func}) => {
  return (
    <Button onClick={func}>
        {name}
    </Button>
  )
}

export default Btn
