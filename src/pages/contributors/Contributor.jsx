import React from 'react'
import axios from 'axios'

import UserCard from '../../components/userCard/UserCard';

import {Container} from './Style';
import { useState } from 'react';
import { useEffect } from 'react';

const Contributor = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/users`);
    setUsers(res.data.users)
    console.log(res.data.users)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Container>
      <div className="contributors">
        {!users || (users.length === 0 && ( <h2 className="NoNotesFound">No Contributors Found</h2> ))}
        {
          users && (
            users.map((item) => {
              return (
                <UserCard key={item._id} img={item.image} name={item.name} records={item.numOfRecords}/>
              )
            })
          )
        }
      </div>
    </Container>
  )
}

export default Contributor
