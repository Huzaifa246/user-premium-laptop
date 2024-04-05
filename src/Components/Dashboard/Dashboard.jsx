import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import banner from '../../assets/images/banner.jpg';
import banner2 from '../../assets/images/Banner2.jpg';
import "./dashboard.css";
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';

const Dashboard = () => {

  return (
    <>
      <Banner imageUrl={banner} buttonText="Shop All" />
      <h1>
        Dell
      </h1>
      <Banner imageUrl={banner2} buttonText="Shop All" />
      <FeaturedProducts />
    </>
  );
};

export default Dashboard;
