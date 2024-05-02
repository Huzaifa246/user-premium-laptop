import React, { useState } from 'react';

const FeaturedCards = ({ imageUrl1, imageUrl2, productName, productLink, price }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div style={{height: "300px"}}>
                    <img src={hovered ? imageUrl2 : imageUrl1} alt="banner"
                        className="feat-card-img img-fluid"
                        onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                </div>
                <div>
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