import React, { useState } from 'react'
import './Portfolio.css';
import LineSeparator from '../LineSeparator/LineSeparator';
import port1 from '../../assets/port-1.png';
import port2 from '../../assets/port-2.png';
import port3 from '../../assets/port-3.png';
import Modal from '../Modal/Modal';

const Portfolio = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: port1
    },
    {
      id: 2,
      image: port2
    },
    {
      id: 3,
      image: port3
    },
    {
      id: 4,
      image: port1
    },
    {
      id: 5,
      image: port2
    },
    {
      id: 6,
      image: port3
    },
  ]);

  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState();

  function handleOpenModal(img) {
    setIsOpen(true)
    setActiveImage(img);
    console.log(activeImage);
  }

  function handleCloseModal(e) {
    e.stopPropagation();
    setActiveImage(null);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && <Modal handleCloseModal = {handleCloseModal} img={activeImage}/>}
      <div className="portfolio text-center pb-5">
        <div className="container">
          <h2 className='fs-1 fw-bold portfolio-heading'>PORTFOLIO COMPONENT</h2>
          <LineSeparator bgColor="#2c3e50" />
          <div className="row gy-4 mt-2">
            {
              items.map(item => {
                return (
                  <>
                    <div className="col-md-4 col-sm-6 rounded-3 port-item" key={item.id} onClick={() => handleOpenModal(item.image)}>
                      <div className="port-overlay rounded-3 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus text-white fa-6x"></i>
                      </div>
                      <img src={item.image} alt="" className='w-100 rounded-3' />
                    </div>
                  </>

                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio