import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import fetchAllLaptops from '../../Services/getAllLaptops';

function HeaderComponent() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [laptops, setLaptops] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const data = await fetchAllLaptops();
                setLaptops(data);
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            const filteredLaptop = laptops.filter(laptop =>
                laptop?.name?.toLowerCase().includes(searchQuery.toLowerCase())
                ||
                laptop?.brand?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log(filteredLaptop)
            navigate(`/search?query=${searchQuery}`, { state: { results: filteredLaptop } });
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark web-header">
            <div className="container-fluid">
                <a className="navbar-brand txt-white" href="/">LAPTOP BRAND</a>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className={`nav-link txt-white pd-5 ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle className='dd-style ps-1'>
                                    Laptops
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">HP</Dropdown.Item>
                                    <Dropdown.Item href="/">DELL</Dropdown.Item>
                                    <Dropdown.Item href="/">LENOVO</Dropdown.Item>
                                    <Dropdown.Item href="/">APPLE</Dropdown.Item>
                                    <Dropdown.Item href="/">ASUS</Dropdown.Item>
                                    <Dropdown.Item href="/">ACER</Dropdown.Item>
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

                    <div className="ml-auto d-flex align-items-center justify-content-center">
                        {isSearchVisible && (
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Search Name Or Brand..."
                                className="field__input smooth-transition"
                            />
                        )}
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="cart-icon text-white pd-10"
                            onClick={toggleSearchVisibility}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
