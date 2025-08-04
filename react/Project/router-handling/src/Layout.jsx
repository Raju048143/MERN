import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';
import User from './components/User/User';
function Layout() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default Layout
