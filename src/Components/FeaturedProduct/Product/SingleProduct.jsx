import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
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
    const [selectedVariants, setSelectedVariants] = useState([]);
    const [updatedPrice, setUpdatedPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ViewGetByIdApi(productId);
                setProductData(response.data);
                setUpdatedPrice(response.data.price);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    const handleVariantClick = (variant) => {
        const isSelected = selectedVariants.includes(variant.name);
        let newSelectedVariants;
        let newPrice = updatedPrice;

        if (isSelected) {
            newSelectedVariants = selectedVariants.filter(v => v !== variant.name);
            newPrice -= variant.additionalPrice;
        } else {
            newSelectedVariants = [...selectedVariants, variant.name];
            newPrice += variant.additionalPrice;
        }

        setSelectedVariants(newSelectedVariants);
        setUpdatedPrice(newPrice);
    };
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
        variants
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
                        <h1 className='h1-product-style gradient-text'>{name}</h1>
                        {/* <h4>{price}</h4> */}
                        <h4>Rs. {updatedPrice}</h4>
                        <div className="my-3">
                            {variants?.map((variant, index) => (
                                <>
                                <b>
                                Add Ons :
                                </b>
                                <Badge
                                    key={index}
                                    className="m-1"
                                    bg={selectedVariants.includes(variant.name) ? 'primary' : 'secondary'}
                                    onClick={() => handleVariantClick(variant)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {variant.name} +Rs. {variant.additionalPrice}
                                </Badge>
                                </>
                            ))}
                        </div>
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
