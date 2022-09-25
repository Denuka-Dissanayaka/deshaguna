import { async } from '@firebase/util';
import React from 'react';
import {Link} from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

import Btn from '../btn/Btn';

import { Container } from './Style'

const Navbar = () => {
  const {user, logOut} = UserAuth();

  const handleLogout = async () => {
    await logOut();
  }

  return (
    <Container>
        <nav>
          <Link to={'/contributors'}>
            <Btn name='Contributors'/>
          </Link>
          {user?.displayName ? <Btn func={handleLogout} name='Log Out'/> : <Link to={'/signin'}><Btn name='Sign In'/></Link> }
          
        </nav>
    </Container>
  )
}

export default Navbar
