import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage'
import About from './landing_page/about/AboutPage'
import SingnupPage from './landing_page/signup/Signup'
import Product from './landing_page/products/Hero'
import Pricing from './landing_page/pricing/PricingPage'
import Support from './landing_page/support/SupportPage'
import Navbar from '../src/landing_page/Navbar';
import Footer from '../src/landing_page/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/signup" element={<SingnupPage/>}/> 
      <Route path="/product" element={<Product/>}/> 
      <Route path="/pricing" element={<Pricing/>}/> 
      <Route path="/support" element={<Support/>}/> 
    </Routes>
    < Footer/>
  </BrowserRouter>
);

