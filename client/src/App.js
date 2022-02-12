import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1 className="welcome">Welcome to The Mario Kart Black Market!</h1>
      </header>
      <Routes>
        <Route path="/" element={< Home />} />
      </Routes>
    </div>
  )
}

export default App;
