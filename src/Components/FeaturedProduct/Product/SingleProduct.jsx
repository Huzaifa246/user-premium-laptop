import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Card1 from "../../../assets/images/card3.jpg";
import Footer from './../../Footer/footer';

const SingleProduct = () => {
    return (
        <>
            <Container>
                <Row className="my-4">
                    <Col xs={12} md={8} className="text-center">
                        <img
                            src={Card1}
                            alt="Product"
                            className="img-fluid"
                        />
                    </Col>

                    {/* Right section with product details */}
                    <Col xs={12} md={4}>
                        <p className='p-my-store'><sub>MY STORE</sub></p>
                        <h1 className='h1-product-style'>Dell Latitude 7480</h1>
                        <h4>Rs.64,500.00 PKR</h4>

                        <div className="my-2">
                            <div>Quantity: </div>
                            <div className='border border-3 w-fit-content d-flex justify-content-between'>
                                <Button variant="outline-secondary border-0">-</Button>
                                <input
                                    type="number"
                                    value="1"
                                    className="border-0"
                                    readOnly
                                    style={{ width: "30px", textAlign: "center" }}
                                />
                                <Button variant="outline-secondary border-0">+</Button>
                            </div>
                        </div>

                        <div className="mb-5 d-flex flex-column">
                            <button className="add-to-cart justify-content-center">Add to cart</button>
                            <button className='add-to-cart justify-content-center bg-color txt-white' >Buy it now</button>
                        </div>

                        <div className="my-3">
                            <ul className='list-none lh-lg'>
                                <li>Intel Core i7-7th Gen Dual Core 4 MB Cache</li>
                                <li>Ram 8 GB</li>
                                <li>SSD 256 GB</li>
                                <li>Intel UHD Graphics</li>
                                <li>14.1” Anti Glare FHD LED Display</li>
                                <li>Backlight Keyboard</li>
                                <li>90-Days Certified At-Online Warranty</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default SingleProduct;
