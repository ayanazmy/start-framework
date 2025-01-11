import React from 'react'
import avatar from '../../assets/avatar.png';
import './Home.css';
import LineSeparator from '../LineSeparator/LineSeparator'

const Home = () => {
  return (
    <>
    <div className="home d-flex justify-content-center align-items-center">
      <div className="content text-center">
        <img src={avatar} alt="avatar image"/>
        <h2 className='fs-1 fw-bold mt-5'>START FRAMEWORK</h2>
        <LineSeparator bgColor="#fff"/>
        <p className='mt-2'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  )
}

export default Home