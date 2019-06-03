import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper pink lighten-1">
            <div className="container">
                <Link to="/product" className="brand-logo">Product List</Link>
            </div>
        </nav>
    )
}

export default Navbar;