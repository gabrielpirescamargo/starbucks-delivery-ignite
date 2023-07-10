
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart'
import ObrigadoPage from './pages/ObrigadoPage/ObrigadoPage'
import Products from './pages/Products/Products'
import Header from './components/Header/Header'
import './index.css'

export default function userRoutes() {
  return (

    <Router>
      <Header />
      <div className='body'>
        <Routes >
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/obrigado" element={<ObrigadoPage />} />
        </Routes>
      </div>

    </Router>
  );
}