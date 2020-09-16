import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

function App() {

  return (
    <BrowserRouter>
      <div>
          <Layout>          
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
          </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
