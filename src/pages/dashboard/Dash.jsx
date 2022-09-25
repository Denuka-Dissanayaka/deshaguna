import axios from 'axios';
import React from 'react'
import {IoMdCloseCircle} from 'react-icons/io';
import { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';

import RecordCard from '../../components/recordCard/RecordCard';

import {Container} from './Style'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const [display, setDisplay] = useState('');
  const [record, setRecord] = useState('');
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  const {user} = UserAuth();

  const getRecords = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/records/${user.email}`);
      setRecords(res.data.records);
      //console.log(res.data.records);
    } catch(err) {
      console.log(err);
    }
  }

  const postRecord = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/records`, {
        record,
        email: user.email
      })
      console.log(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      postRecord();
      setRecord('');
      getRecords();
      setDisplay('none');
  }

  const handleDelete = async(id, email) => {
      await axios.delete(`${process.env.REACT_APP_DESHAGUNA_BACKEND}/api/v1/records/${id}/${email}`);
      getRecords();
      navigate('/dashboard');
  }

  useEffect(() => {
      getRecords();
  }, [user])

  useEffect(() => {
      getRecords();
  }, [record])

  return (
    <Container>
      <h1>Welcome <span>{user.displayName}</span></h1>
      <div className="record-area">
        <div className="add-record">
          <button onClick={() => {setDisplay('flex')}}>Add Record</button>
        </div>
        <div className="records">
          {records && (records.map((item) => {
            return (
              <RecordCard record={item.record} id={item._id} email={item.email} delFunc={handleDelete} key={item._id}/>
            )
          }))}
        </div>
      </div>
      
      <div className='input-area' style={{display}}>
        <div className="form-area">
          <div className="form-head">
            <p>Add New Record</p>
            <div onClick={() => {setDisplay('none')}}><IoMdCloseCircle/></div>
          </div>
          <form>
            <div className='text'>
              <input type="text" value={record} onChange={(e) => setRecord(e.target.value)} required />
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Dash
