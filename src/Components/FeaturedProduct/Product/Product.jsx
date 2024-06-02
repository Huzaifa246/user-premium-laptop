import React, { useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';

// const Product = ({ product }) => {
const Product = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState(); // Default sample data

    const product = products.find((p) => p.id.toString() === productId);
    const [quantity, setQuantity] = useState(1); // State for quantity

    if (!product) {
        return <div>Product not found</div>;
    }
    const handleAddToCart = () => {
        console.log('Adding to cart:', product.name, quantity);
    };

    return (
        <div className="product-container">
            <img className="product-image" src={image} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <p className="product-price">Price: Rs{price}</p>
                <ul className="product-specs">
                    {specs.map((spec) => (
                        <li key={spec.name}>{spec.name}: {spec.value}</li>
                    ))}
                </ul>
                <p className="product-description">{description}</p>
                <div className="add-to-cart">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;