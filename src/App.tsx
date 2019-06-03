import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/navBar/navbar';
import ProductList from './component/product/productList';
import ProductDetail from './component/product/productDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path = '/product' component = {ProductList} />
          <Route path = '/:product_id' component={ ProductDetail } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
