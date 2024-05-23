import React, { useState } from 'react';

const FeaturedCards = ({ imageUrl1, imageUrl2, productName, productLink, price, ram, processor, year, brand }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <>
            <div className="col-12 mb-4 px-1 cursor-pointer">
                <div className='mob-card px-2' style={{height: "300px"}}>
                    <img src={hovered ? imageUrl2 : imageUrl1} alt="banner"
                        className="feat-card-img img-fluid"
                        onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                </div>
                <div className='px-2'>
                    <div className="card__content">
                        <div className="card__information">
                            <h3 className="card__heading">
                                <a href={productLink} className="full-unstyled-link">{productName}</a>
                            </h3>
                            <p>
                                {price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedCards