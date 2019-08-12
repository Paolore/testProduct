import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

//Pages
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import SidePage from './pages/SidePage';

//Components
import Header from './components/Header';
import UserBar from './components/UserBar';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  return (
    <div class="App">
      <MainPage>
        <Navbar />
        <Header />
        <div class="restaurant-header">
          <Text className="restaurant-header-title" content="Restaurants 🍔" />
          <button class="delivery-button">
            <i class="material-icons">access_time</i>
            Delivery: <strong>Now</strong>
            <i class="material-icons">expand_more</i>
          </button>
        </div>
        <CategoryList />
        <ProductList />
      </MainPage>
      <SidePage>
        <UserBar />
        <OrderPage />
      </SidePage>
    </div>
  );
}

export default App;
