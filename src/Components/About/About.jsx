import React from 'react';
import './About.css';
import LineSeparator from '../LineSeparator/LineSeparator';

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="about-content container text-center">
        <h2 className='fs-1 fw-bold'>ABOUT COMPONENT</h2>
        <LineSeparator bgColor="#fff" />
        <div className="container">
          <div className="row text-start gy-4 mx-auto">
            <div className="col-sm-6">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className="col-sm-6">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About