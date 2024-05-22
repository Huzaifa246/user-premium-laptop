import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchAllLaptops from '../../Services/getAllLaptops';
import Loader from '../Loader/Loader';
import FeaturedCards from '../FeaturedProduct/FeaturedCards';
import Footer from '../Footer/footer';

const FilterProductPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOption, setSortOption] = useState(''); // State to store the selected sort option
    const [minPrice, setMinPrice] = useState(''); // State to store the minimum price filter
    const [maxPrice, setMaxPrice] = useState(''); // State to store the maximum price filter
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllLaptops();
                const formattedData = data.map(product => ({
                    ...product,
                    price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")) // Remove non-numeric characters and convert to number
                }));
                setProducts(formattedData);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleProductClick = (product) => {
        const productDetailsLink = `/filtered-products/${product._id}`;
        navigate(productDetailsLink);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handlePriceRangeSubmit = (e) => {
        e.preventDefault();
        setShowDropdown(false); // Close the dropdown after applying price range
        // Handle price range filtering here
    };

    const handleResetClick = () => {
        setMinPrice('');
        setMaxPrice('');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const sortProducts = (products, option) => {
        switch (option) {
            case 'priceHighToLow':
                return [...products].sort((a, b) => b.price - a.price);
            case 'priceLowToHigh':
                return [...products].sort((a, b) => a.price - b.price);
            case 'alphabetical':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            default:
                return products;
        }
    };

    const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
        return products.filter(product => {
            const price = product.price;
            const isAboveMinPrice = minPrice === '' || price >= parseFloat(minPrice);
            const isBelowMaxPrice = maxPrice === '' || price <= parseFloat(maxPrice);
            return isAboveMinPrice && isBelowMaxPrice;
        });
    };

    const sortedProducts = sortProducts(products, sortOption);
    const filteredAndSortedProducts = filterProductsByPriceRange(sortedProducts, minPrice, maxPrice);

    return (
        <>
            <div className='mx-3 mt-4'>
                <h3>Filtered products</h3>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex flex-column'>
                        <span className='py-1'>
                            Filter by:
                        </span>
                        <div className="dropdown ml-3 select-dd">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="priceRangeDropdown"
                                onClick={toggleDropdown}
                            >
                                Price Range
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu dropdown-menu-right show" aria-labelledby="priceRangeDropdown">
                                    <form onSubmit={handlePriceRangeSubmit} className="px-3 py-3">
                                        <div className="form-group">
                                            <label htmlFor="minPrice">Min Price:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="minPrice"
                                                value={minPrice}
                                                onChange={handleMinPriceChange}
                                                placeholder="Min price"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="maxPrice">Max Price:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="maxPrice"
                                                value={maxPrice}
                                                onChange={handleMaxPriceChange}
                                                placeholder="Max price"
                                            />
                                        </div>
                                        <button type="button" className="btn btn-danger" onClick={handleResetClick}>Reset</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="sortOptions" className="py-1">Sort by: </label>
                        <select id="sortOptions" value={sortOption} onChange={handleSortChange}
                        className='p-2 select-dd'
                        >
                            <option value="">Select</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className='d-flex mob-wrap mt-5'>
                        {filteredAndSortedProducts.map((product) => (
                            <div key={product._id} onClick={() => handleProductClick(product)}>
                                <FeaturedCards
                                    imageUrl1={product.imageUrls[0]}
                                    imageUrl2={product.imageUrls[1] || product.imageUrls[0]}
                                    productName={product.name}
                                    productLink={product.id}
                                    price={`$${product.price}`}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default FilterProductPage;
