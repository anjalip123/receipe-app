import React from 'react';
import Hero from './Hero';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import { AllMenu } from './AllMenuContext';
import { AppProvider } from '../context/AppProvider';

function Menu() {
  return (
    <Router>
      <AppProvider>
      <Header />
      <Hero />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AllMenu>
              <>
                <SpecialDishes />
                <FilteredDishes />
              </>
            </AllMenu>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </AppProvider>
    </Router>
  );
}

export default Menu;