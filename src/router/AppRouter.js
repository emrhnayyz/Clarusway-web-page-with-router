import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Html from '../pages/Html';
import Css from '../pages/Css';
import Logo from '../pages/Logo';
import Services from '../pages/Services';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/logo' element={<Logo/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;