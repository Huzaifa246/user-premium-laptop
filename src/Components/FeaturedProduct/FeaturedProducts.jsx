import React, { useState, useEffect } from 'react';
import FeaturedCards from './FeaturedCards';
import { useNavigate } from 'react-router-dom';
import fetchAllLaptops from '../../Services/getAllLaptops';
import Loader from '../Loader/Loader';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllLaptops();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleProductClick = (product) => {
        const productDetailsLink = `/featured-products/${product._id}`;
        console.log('Navigating to:', productDetailsLink);
        navigate(productDetailsLink);
    };

    return (
        <Container>
            <h3 className="mt-4">Featured Products</h3>
            {isLoading ? (
                <Loader />
            ) : (
                <Row>
                    {products.map((product) => (
                        <FeaturedCards
                            key={product._id}
                            imageUrl1={product.imageUrls[0]}
                            imageUrl2={product.imageUrls[1] || product.imageUrls[0]}
                            productName={product.name}
                            productLink={`/featured-products/${product._id}`}
                            price={`Rs. ${product.price}`}
                            ram={product.ram}
                            processor={product.processor}
                            year={product.year}
                            brand={product.brand}
                        />
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default FeaturedProducts;
