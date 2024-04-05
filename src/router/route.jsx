import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import LoginForm from '../Pages/Login/login';
import HeaderComponent from '../Components/Header/header';
import Dashboard from '../Components/Dashboard/Dashboard';

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<WithHeader />}>
      <Route path="/" element={<Dashboard />} />
        {/* <Route path="/laptop-list" element={<LaptopList />} /> */}
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
