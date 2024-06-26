import React, { useState, useEffect } from 'react';
import FeaturedCards from './FeaturedCards';
import fetchAllLaptops from '../../Services/getAllLaptops';
import Loader from '../Loader/Loader';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import card3 from '../../assets/images/card3.jpg';

const FeaturedProducts = () => {
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

    return (
        <Container>
            <h2 className="mt-4 gradient-text">Featured Products</h2>
            {isLoading ? (
                <Loader />
            ) : (
                <Row>
                    {/* {products.map((product) => ( */}
                    {products.slice(0, 4).map((product) => (
                        <FeaturedCards
                            key={product._id}
                            imageUrl1={product.imageUrls[0] || card3}
                            imageUrl2={product.imageUrls[1] || product.imageUrls[0] || card3}
                            productName={product.name}
                            productLink={`/filtered-products/${product._id}`}
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
