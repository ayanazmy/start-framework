import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark py-4 fixed-top z-1">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-2" to="">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" to="contact">CONTACT</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar