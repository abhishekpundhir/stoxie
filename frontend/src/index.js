import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// Navbar Routes
import HomePage from './landing_page/home/HomePage'
import About from './landing_page/about/AboutPage'
import Support from './landing_page/support/SupportPage'
import Product from './landing_page/products/Hero'
import Pricing from './landing_page/pricing/PricingPage'
import SingnupPage from './landing_page/signup/Signup'

// Comman Components Routes
import Navbar from '../src/landing_page/Navbar';
import Footer from '../src/landing_page/Footer';
import NotFound from './landing_page/NotFound'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/support" element={<Support/>}/> 
      <Route path="/product" element={<Product/>}/> 
      <Route path="/pricing" element={<Pricing/>}/> 
      <Route path="/signup" element={<SingnupPage/>}/> 
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    < Footer/>
  </BrowserRouter>
);

