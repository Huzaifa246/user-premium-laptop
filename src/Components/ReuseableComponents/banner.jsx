import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ imageUrl, buttonText, link }) => {
    return (
        <div className='position-relative'>
            <img src={imageUrl} alt="banner" className='w-100' />
            {buttonText && link &&
                <Link to={link}>
                    <button className='shop-all-btn'>
                        {buttonText}
                    </button>
                </Link>
            }
        </div>
    );
};

export default Banner;
