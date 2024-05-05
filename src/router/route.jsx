import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import LoginForm from '../Pages/Login/login';
import HeaderComponent from '../Components/Header/header';
import Dashboard from '../Components/Dashboard/Dashboard';
import FeaturedProducts from '../Components/FeaturedProduct/FeaturedProducts';
import Product from './../Components/FeaturedProduct/Product/Product';
import SingleProduct from '../Components/FeaturedProduct/Product/SingleProduct';

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<WithHeader />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/featured-products" element={<FeaturedProducts />} />
      {/* <Route path="/featured-products/:productId" element={<Product />} /> */}
      <Route path="/featured-products/:product" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

function WithHeader({ children }) {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default LayoutRoute;
