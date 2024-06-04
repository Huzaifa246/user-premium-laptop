import React from 'react';
import banner7 from '../../assets/images/Banner7.jpg';
import banner6 from '../../assets/images/Banner6.jpg';
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import FaqsPage from './../Faqs/FaqsPage';
import Footer from './../Footer/footer';
import { Link } from "react-router-dom";
import DashboardSingleProduct from './../FeaturedProduct/DashboardSingleProduct';

const Dashboard = () => {
  return (
    <>
      <Banner imageUrl={banner6} buttonText="Shop All" link="/filtered-products" />
      <DashboardSingleProduct />
      <FeaturedProducts />
      <div className='d-flex justify-content-center my-4'>
        <Link to="/filtered-products">
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
