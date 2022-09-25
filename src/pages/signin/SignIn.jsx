import { async } from '@firebase/util';
import React from 'react';
import axios from 'axios';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
//import {signInWithGoogle} from '../../Firebase';

import { Container } from './style'
import { useEffect } from 'react';

const SignIn = () => {
  const {googleSingIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSingIn();
      
    } catch (error) {
      console.log(error);
    }
  }

  //==================

  const getRecords = async () => {
    const res = await axios.get(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/records`);
    console.log(res.data);
  }

  // save user to database
  const postUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/users`, {
        name: user.displayName,
        email: user.email,
        image: user.photoURL
      });
      console.log(res.data);
    } catch(err) {
      console.log(err);
    }
    
  }

  

  useEffect(() => {
    if(user != null) {
      navigate('/dashboard');
      postUser();
      
    }
  }, [user])

  return (
    <Container>
      <button onClick={handleGoogleSignIn}><FcGoogle/><span>Sign In With Google</span></button>
    </Container>
  )
}

export default SignIn
