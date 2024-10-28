import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
