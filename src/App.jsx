import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ServicePage from './pages/ServicePage';
import CartPage from './pages/CartPage';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/blogger-outreach" element={<ServicePage />} />
              <Route path="/niche-edits" element={<ServicePage />} />
              <Route path="/multilingual" element={<ServicePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;