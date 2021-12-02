import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-title">
                <img className="nav-title-image" src="logo.svg" alt="Ecommerce"></img>
                <img className="nav-title-text" src="the-plant-shop.svg" alt="The Plant Shop"></img>
            </div>

            <input className="nav-toggle" type="checkbox" />
            <span className="nav-toggle-label">Menu</span>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/">About us</Link>
                <Link to="/">Products</Link>
                <Link to="/">Contact us</Link>
                <Link to="/">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar
