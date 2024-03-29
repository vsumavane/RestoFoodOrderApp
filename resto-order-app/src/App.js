import React from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import HomePage from './HomePage';
import './HomePage.css';
import OrderPage from './OrderPage';
import './OrderPage.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* Home Page */}
      <HomePage />
      
      {/* Order Page */}
      <OrderPage />
    </div>
  );
}

export default App;
