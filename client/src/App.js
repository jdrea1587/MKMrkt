import './index.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import ProductView from './pages/ProductView';
import Checkout from './pages/Checkout';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productview/:id' element={<ProductView />} />
        <Route path='/checkout/' element={<Checkout />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
