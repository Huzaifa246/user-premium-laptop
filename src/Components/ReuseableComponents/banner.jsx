import React from 'react';

const Banner = ({ imageUrl, buttonText }) => {
  return (
    <div className='position-relative'>
      <img src={imageUrl} alt="banner" className='w-100' />
      <button className='shop-all-btn'>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
