import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import LoginForm from '../Pages/Login/login';
import HeaderComponent from '../Components/Header/header';
import Dashboard from '../Components/Dashboard/Dashboard';
import SingleProduct from '../Components/FeaturedProduct/Product/SingleProduct';
import SearchResultsComponent from '../Components/ReuseableComponents/SearchResultComponent';
import FilterProductPage from '../Components/FilteredProduct/FilterProductPage';

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<WithHeader />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/filtered-products" element={<FilterProductPage />} />
      <Route path="/filtered-products/:productId" element={<SingleProduct />} />
      <Route path="/search" element={<SearchResultsComponent />} />
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
