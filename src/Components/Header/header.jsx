import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

function HeaderComponent() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark web-header">
            <div className="container-fluid">
                <a className="navbar-brand txt-white" href="/">LAPTOP BRAND</a>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link txt-white pd-5 ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle className='dd-style ps-1'>
                                    Laptops
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/collections/hp">HP</Dropdown.Item>
                                    <Dropdown.Item href="/collections/dell">DELL</Dropdown.Item>
                                    <Dropdown.Item href="/collections/lenovo">LENOVO</Dropdown.Item>
                                    <Dropdown.Item href="/collections/apple">APPLE</Dropdown.Item>
                                    <Dropdown.Item href="/collections/asus">ASUS</Dropdown.Item>
                                    <Dropdown.Item href="/collections/acer">ACER</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link txt-white pd-5 ${location.pathname === '/gaming-laptops' ? 'active' : ''}`} aria-current="page" href="/gaming-laptops">Gaming Laptops</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link txt-white pd-5 ${location.pathname === '/about-us' ? 'active' : ''}`} aria-current="page" href="/about-us">About Us</a>
                        </li>
                    </ul>

                    <div className="ml-auto d-flex">
                        <FontAwesomeIcon icon={faSearch} className="cart-icon text-white pd-10" />
                        <FontAwesomeIcon icon={faBagShopping} className="cart-icon text-white pd-10" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
