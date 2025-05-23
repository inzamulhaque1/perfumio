import React, { useState } from 'react';
import logo from '../assets/logo/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    // State to manage navbar collapse state
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Handle toggle click
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            {/* Add a spacer to prevent content from hiding under fixed navbar */}
            <div style={{ height: "60px" }}></div>
            
            <nav className="navbar navbar-expand-lg bg-white py-2 py-lg-3 fixed-top ">
                <div className="container">
                    {/* Left: Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: '40px' }} />
                    </a>

                    {/* Toggle button for mobile */}
                    <button 
                        className="navbar-toggler border-0" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded={!isNavCollapsed ? true : false} 
                        aria-label="Toggle navigation"
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center: Menu */}
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                        <ul className="navbar-nav mx-auto gap-lg-4 text-center text-lg-start py-2 py-lg-0 nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active fw-medium" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">About</a>
                            </li>
                        </ul>
                        
                        {/* Mobile CTA Button (visible only on mobile) */}
                        <div className="d-lg-none text-center mb-2">
                            <a href="#" className="btn btn-outline-dark d-inline-flex align-items-center gap-2">
                                BEGIN YOUR JOURNEY <span>&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Button (visible only on desktop) */}
                    <div className="d-none d-lg-block">
                        <a href="#" className="btn btn-outline-dark d-flex align-items-center gap-2">
                            BEGIN YOUR JOURNEY <span>&rarr;</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;