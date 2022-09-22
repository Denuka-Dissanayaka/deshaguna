import React from 'react'
import video from '../asset/weather.mp4'
import { Container } from './Style'

const Home = () => {
  return (
    <Container>
        <video src={video} autoPlay loop muted />
        <div className="cover"></div>
        <div className='text'>
            <h1>Deshaguna</h1>
        </div>
        
    </Container>
  )
}

export default Home
