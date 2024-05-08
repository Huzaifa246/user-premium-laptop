import React, { useState, useEffect } from 'react';
import banner from '../../assets/images/banner.jpg';
// import banner2 from '../../assets/images/Banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
// import Card1 from "../../assets/images/card1.jpg";
// import Card2 from "../../assets/images/card2.jpg";
// import Card3 from "../../assets/images/card3.jpg";
// import Card4 from "../../assets/images/card4.jpg";
// import FeaturedCards from './../FeaturedProduct/FeaturedCards';
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import FaqsPage from './../Faqs/FaqsPage';
import ContactForm from './../ContactUs/contactForm';
import Footer from './../Footer/footer';
// import fetchAllLaptops from './../../Services/getAllLaptops';


const Dashboard = () => {

  // const [laptops, setLaptops] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchAllLaptops();
  //       setLaptops(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <Banner imageUrl={banner} buttonText="Shop All" />
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
