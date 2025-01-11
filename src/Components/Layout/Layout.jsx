import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css';
const Layout = () => {
    return (<>
        <Navbar />
        <div className="page">
            <Outlet />
        </div>
        <Footer />
    </>
    )
}

export default Layout