import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import ShopPage from './components/ShopPage';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
