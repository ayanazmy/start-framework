import React from 'react'
import './Modal.css';
const Modal = ({ img, handleCloseModal }) => {
    return (
        <>
            <div className="modal position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center" onClick={(e) => handleCloseModal(e)}>
                <div className="image-container w-50 h-100 mx-auto d-flex justify-content-center align-items-center">
                    <img src={img} alt="" className='w-75 h-50' />
                </div>
            </div>
        </>
    )
}

export default Modal;