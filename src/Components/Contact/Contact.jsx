import React from 'react'
import './Contact.css';
import LineSeparator from '../LineSeparator/LineSeparator';
const Contact = () => {
  return (
    <>
      <div className="contact pb-5">
        <h2 className="fs-1 fw-bold text-center contact-heading">CONTACT SECTION</h2>
        <LineSeparator bgColor="#2c3e50" />
        <div className="contact-form mx-auto mt-5 pt-4">
          <div className="mb-4">
            <input class="form-control border-0 border-bottom py-3" type="text" placeholder="Username" aria-label="default input example" />
          </div>
          <div className="mb-4">
            <input class="form-control border-0 border-bottom py-3" type="text" placeholder="Age" aria-label="default input example" />
          </div>
          <div className="mb-4">
            <input class="form-control border-0 border-bottom py-3" type="email" placeholder="Email" aria-label="default input example" />
          </div>
          <div className="mb-4">
            <input class="form-control border-0 border-bottom py-3" type="password" placeholder="Password" aria-label="default input example" />
          </div>
          <div className="btn">Send Message</div>
        </div>
      </div>
    </>
  )
}

export default Contact