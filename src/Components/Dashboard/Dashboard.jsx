import React from 'react';
import banner from '../../assets/images/Banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner7 from '../../assets/images/Banner7.jpg';
import banner6 from '../../assets/images/Banner6.jpg';
import banner5 from '../../assets/images/Banner5.jpg';
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import FaqsPage from './../Faqs/FaqsPage';
import Footer from './../Footer/footer';
import { Link } from "react-router-dom";
import DashboardSingleProduct from './../FeaturedProduct/DashboardSingleProduct';

const Dashboard = () => {
  return (
    <>
      <Banner imageUrl={banner6} buttonText="Shop All" link="/featured-products" />
      {/* <Banner imageUrl={banner7} buttonText="Shop All" />
      <Banner imageUrl={banner5} buttonText="Shop All" /> */}
      <DashboardSingleProduct />
      <Banner imageUrl={banner3} buttonText="Shop All" link="/featured-products" />
      <FeaturedProducts />
      <div className='d-flex justify-content-center my-4'>
        <Link to="/featured-products">
          <button className='view-all-btn'>
            View All
          </button>
        </Link>
      </div>
      <Banner imageUrl={banner7} buttonText={false} />
      <FaqsPage />

      <Footer />
    </>
  );
};

export default Dashboard;
