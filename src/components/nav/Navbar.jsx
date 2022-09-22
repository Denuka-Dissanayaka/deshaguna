import React from 'react';
import {Link} from "react-router-dom";

import Btn from '../btn/Btn';

import { Container } from './Style'

const Navbar = () => {
  return (
    <Container>
        <nav>
          <Link to={'/contributors'}>
            <Btn name='Contributors'/>
          </Link>
            
            <Btn name='Sign In'/>
        </nav>
    </Container>
  )
}

export default Navbar
