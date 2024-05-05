import React, { useState } from 'react'
import FeaturedCards from './FeaturedCards';
import Card1 from "../../assets/images/card1.jpg";
import Card2 from "../../assets/images/card2.jpg";
import Card3 from "../../assets/images/card3.jpg";
import Card4 from "../../assets/images/card4.jpg";
import Card5 from "../../assets/images/card5.jpg";
import { useNavigate } from 'react-router-dom';
const FeaturedProducts = () => {

    const navigate = useNavigate(); // Create a useNavigate instance

    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
        console.log('Added to cart:', product.productName);
    };

    const products = [
        {
            id: 1,
            imageUrl1: Card4,
            imageUrl2: Card2,
            productName: "Asus ROG Strix G15 Gaming Laptop",
            productLink: "/featured-products/:product/",
            price: "$999",
            category: "Gaming Laptop",
        },
        {
            id: 2,
            imageUrl1: Card2,
            imageUrl2: Card1,
            productName: "Dell XPS 13 Ultrabook",
            productLink: "/featured-products/:product",
            price: "$1299",
            category: "Ultrabook",
        },
        {
            id: 3,
            imageUrl1: Card3,
            imageUrl2: Card5,
            productName: "Apple MacBook Pro 14",
            productLink: "/featured-products/:product",
            price: "$1999",
            category: "Laptop",
        },
        {
            id: 4,
            imageUrl1: Card1,
            imageUrl2: Card2,
            productName: "Microsoft Surface Laptop Studio",
            productLink: "/featured-products/:product",
            price: "$1599",
            category: "2-in-1 Laptop",
        },
        {
            id: 5,
            imageUrl1: Card4,
            imageUrl2: Card5,
            productName: "HP Spectre x360 Convertible Laptop",
            productLink: "/featured-products/:product",
            price: "$1399",
            category: "Convertible Laptop",
        },
        {
            id: 6,
            imageUrl1: Card3,
            imageUrl2: Card1,
            productName: "Lenovo ThinkPad X1 Carbon",
            productLink: "/featured-products/:product",
            price: "$1499",
            category: "Business Laptop",
        },
        {
            id: 7,
            imageUrl1: Card4,
            imageUrl2: Card2,
            productName: "Asus Strix G14 Gaming Laptop",
            productLink: "/featured-products/:product",
            price: "$999",
            category: "Gaming Laptop",
        },
        {
            id: 8,
            imageUrl1: Card2,
            imageUrl2: Card1,
            productName: "Dell XPS 13 Ultrabook",
            productLink: "/featured-products/:product",
            price: "$1299",
            category: "Ultrabook",
        },
    ];

    const handleProductClick = (product) => {
        // const productDetailsLink = `/featured-products/${product.id}`;
        // navigate(productDetailsLink);
        const productDetailsLink = `/featured-products/:product`;
        navigate(productDetailsLink);
    };
    return (
        <>
            <div className='mx-5 mt-4'>
                <h3>
                    Featured products
                </h3>
                <div className='d-flex flex-wrap'>
                    {products.map((product) => (
                        // <div key={product.id} onClick={() => handleProductClick(product)}>
                        <FeaturedCards
                            imageUrl1={product.imageUrl1}
                            imageUrl2={product.imageUrl2}
                            productName={product.productName}
                            productLink={product.productLink}
                            price={product.price}
                            onClick={() => handleProductClick(product)}
                        />
                        // </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts