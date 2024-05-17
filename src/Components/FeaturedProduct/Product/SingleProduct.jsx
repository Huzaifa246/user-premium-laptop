import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Card1 from "../../../assets/images/card3.jpg";
import Footer from './../../Footer/footer';
import { useParams } from 'react-router-dom';
import ViewGetByIdApi from '../../../Services/ViewGetById';
import Loader from '../../Loader/Loader';

const SingleProduct = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ViewGetByIdApi(productId);
                console.log(response.data, "Fetching")
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    if (isLoading) {
        return <div>
            <Loader />
        </div>;
    }
    if (!productData) {
        return <div>Product not found.</div>;
    }
    const {
        name,
        price,
        processor,
        ram,
        hardisk,
        ssd,
        graphics,
        year,
        imageUrls,
        backlitKeyboard,
        screenSize,
        displayResolution,
        camera,
        gps,
        batteryCapacity,
    } = productData;

    const whatsappNumber = "+923000419226";
    const whatsappMessage = `I'm interested in the product: ${productData.name}`;
    return (
        <>
            <Container>
                <Row className="my-4">
                    <Col xs={12} md={8} className="text-center">
                        <img
                            src={imageUrls[0] || Card1}
                            alt={productData.name}
                            className="img-fluid"
                        />
                    </Col>

                    {/* Right section with product details */}
                    <Col xs={12} md={4}>
                        <p className='p-my-store'><sub>MY STORE</sub></p>
                        <h1 className='h1-product-style'>{name}</h1>
                        <h4>{price}</h4>

                        {/* <div className="my-2">
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
                        </div> */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-decoration-none'
                        >
                            <div className="mb-5 d-flex flex-column">
                                <button className='add-to-cart justify-content-center bg-color txt-white' >Buy it now</button>
                            </div>
                        </a>

                        <div className="my-3">
                            <ul className='list-none lh-lg'>
                                <li>Processor: {processor}</li>
                                <li>RAM: {ram}</li>
                                <li>Hardisk: {hardisk} GB</li>
                                <li>SSD: {ssd}</li>
                                <li>Graphics: {graphics}</li>
                                <li>Year: {year}</li>
                                <li>Screen Size: {screenSize}</li>
                                <li>Resolution: {displayResolution}</li>
                                <li>Backlit Keyboard: {backlitKeyboard}</li>
                                <li>Battery Capacity: {batteryCapacity}</li>
                                <li>Camera: {camera}</li>
                                <li>GPS: {gps}</li>
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
