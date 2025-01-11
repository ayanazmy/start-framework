import React from 'react'
import "./LineSeparator.css"
const LineSeparator = ({bgColor}) => {
  return (
    <div className='separator d-flex justify-content-center align-items-center'>
        <div className="line" style={{backgroundColor: bgColor}}></div>
        <i className="fa-solid fa-star"></i>
        <div className="line" style={{backgroundColor: bgColor}}></div>
    </div>
  )
}

export default LineSeparator