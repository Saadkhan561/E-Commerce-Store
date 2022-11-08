import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Checkout from './components/checkout';
import Basket from './components/basket';
import Category from './components/category';
import Layout from './components/layout';
import Home from './components/home';
import { useEffect, useState } from 'react';
import { getCategories } from './fetcher';
import OrderConfirmation from './components/orderConfirm';
import SearchResults from './components/searchResults';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  useEffect(() => {
    const responseObject = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    responseObject();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route path='home' index element={<Home />} />
            <Route path='categories/:categoryId' element={<Category />} />
            <Route path='products/:productId' element={<ProductDetail />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='orderconfirmation' element={<OrderConfirmation />} />
            <Route path='search' element={<SearchResults />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
