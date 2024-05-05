import React from 'react';
import banner from '../../assets/images/banner.jpg';
import banner2 from '../../assets/images/Banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import Card1 from "../../assets/images/card1.jpg";
import Card2 from "../../assets/images/card2.jpg";
import Card3 from "../../assets/images/card3.jpg";
import Card4 from "../../assets/images/card4.jpg";
import FeaturedCards from './../FeaturedProduct/FeaturedCards';
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import FaqsPage from './../Faqs/FaqsPage';
import ContactForm from './../ContactUs/contactForm';
import Footer from './../Footer/footer';


const Dashboard = () => {

  return (
    <>
      <Banner imageUrl={banner} buttonText="Shop All" />
      <div className='mx-5 mt-4'>
        <div className='d-flex flex-wrap'>
          <FeaturedCards imageUrl1={Card4} imageUrl2={Card4}
            productName="Asus ROG Strix"
            productLink="test"
            price={"$999"}
          />

          <FeaturedCards imageUrl1={Card2} imageUrl2={Card2}
            productName="ROG Strix"
            productLink="test"
            price={"$999"}
          />
          <FeaturedCards imageUrl1={Card3} imageUrl2={Card3}
            productName="ROG Strix"
            productLink="test"
            price={"$999"}
          />
          <FeaturedCards imageUrl1={Card1} imageUrl2={Card1}
            productName="Asus ROG Strix"
            productLink="test"
            price={"$999"}
          />
        </div>
      </div>
      <Banner imageUrl={banner2} buttonText="Shop All" />
      <FeaturedProducts />
      <div className='d-flex justify-content-center my-4'>
        <a href="/featured-products">
          <button className='view-all-btn'>
            View All
          </button>
        </a>
      </div>
      <Banner imageUrl={banner3} buttonText={false} />
      <FaqsPage />

      <ContactForm />
      <Footer />
    </>
  );
};

export default Dashboard;
