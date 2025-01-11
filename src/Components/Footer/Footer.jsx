import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='py-5 text-center'>
                <div className="footer-content container py-5">
                    <div className="row gy-5">
                        <div className="col-md-4">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h3>AROUND THE WEB</h3>
                            <div className="icons d-flex justify-content-center">
                                <div className="media-icon"><i className="fa-brands fa-facebook"></i></div>
                                <div className="media-icon mx-2"><i className="fa-brands fa-twitter"></i></div>
                                <div className="media-icon me-2"><i className="fa-brands fa-linkedin-in"></i></div>
                                <div className="media-icon"><i className="fa-solid fa-globe"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright text-center py-4">Copyright © Your Website 2021</div>
        </>


    )
}

export default Footer