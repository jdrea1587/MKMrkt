import './index.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import React from 'react';


function App() {
  return (
      <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </>

      )
}

      export default App;
