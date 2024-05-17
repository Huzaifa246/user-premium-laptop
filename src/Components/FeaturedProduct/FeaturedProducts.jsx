import React, { useState, useEffect } from 'react'
import FeaturedCards from './FeaturedCards';
import { useNavigate } from 'react-router-dom';
import fetchAllLaptops from '../../Services/getAllLaptops';
import Loader from '../Loader/Loader';
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
        <>
            <div className='mx-5 mt-4'>
                <h3>
                    Featured products
                </h3>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className='d-flex mob-wrap'>
                            {products?.map((product) => (
                                <div onClick={() => handleProductClick(product)}>
                                    <FeaturedCards
                                        key={product._id}
                                        imageUrl1={product.imageUrls[0]}
                                        imageUrl2={product.imageUrls[1] || product.imageUrls[0]}
                                        productName={product.name}
                                        productLink={product.id}
                                        price={`$${product.price}`}
                                        onClick={() => handleProductClick(product)}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default FeaturedProducts