import React from 'react'
import FeaturedCards from './FeaturedCards';
import Card1 from "../../assets/images/card1.jpg";
import Card2 from "../../assets/images/card2.jpg";
import Card3 from "../../assets/images/card3.jpg";
import Card4 from "../../assets/images/card4.jpg";
import Card5 from "../../assets/images/card5.jpg";
import "./featuredProduct.css";
const FeaturedProducts = () => {
    return (
        <>
            <div className='mx-5 mt-4'>
                <h3>
                    Featured products
                </h3>
                <div className='d-flex flex-wrap'>
                    <FeaturedCards imageUrl1={Card4} imageUrl2={Card2}
                        productName="Asus ROG Strix"
                        productLink="test"
                        price={"$999"}
                    />

                    <FeaturedCards imageUrl1={Card2} imageUrl2={Card1}
                        productName="ROG Strix"
                        productLink="test"
                        price={"$999"}
                    />
                    <FeaturedCards imageUrl1={Card3} imageUrl2={Card5}
                        productName="ROG Strix"
                        productLink="test"
                        price={"$999"}
                    />
                    <FeaturedCards imageUrl1={Card1} imageUrl2={Card2}
                        productName="Asus ROG Strix"
                        productLink="test"
                        price={"$999"}
                    />
                </div>
                <div className='d-flex flex-wrap'>
                    <FeaturedCards imageUrl1={Card4} imageUrl2={Card2}
                        productName="Asus ROG Strix"
                        productLink="test"
                        price={"$1999"}
                    />

                    <FeaturedCards imageUrl1={Card2} imageUrl2={Card1}
                        productName="ROG Strix"
                        productLink="test"
                        price={"$1009"}
                    />
                    <FeaturedCards imageUrl1={Card2} imageUrl2={Card5}
                        productName="ROG Strix"
                        productLink="test"
                        price={"$1000"}
                    />
                    <FeaturedCards imageUrl1={Card1} imageUrl2={Card2}
                        productName="Asus ROG Strix"
                        productLink="test"
                        price={"$1500"}
                    />
                </div>

                <div className='d-flex justify-content-center my-4'>
                    <button className='view-all-btn'>
                        View All
                    </button>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts