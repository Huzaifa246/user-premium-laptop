import React from 'react';
import banner from '../../assets/images/banner.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import Banner from '../ReuseableComponents/banner';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import FaqsPage from './../Faqs/FaqsPage';
import ContactForm from './../ContactUs/contactForm';
import Footer from './../Footer/footer';
// import fetchAllLaptops from './../../Services/getAllLaptops';
import { Link } from "react-router-dom";

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
        <Link to="/featured-products">
          <button className='view-all-btn'>
            View All
          </button>
        </Link>
      </div>
      <Banner imageUrl={banner3} buttonText={false} />
      <FaqsPage />

      <ContactForm />
      <Footer />
    </>
  );
};

export default Dashboard;
