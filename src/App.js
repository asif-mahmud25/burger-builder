import React, {useEffect} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    let idToken = localStorage.getItem('idToken');
    props.loggedIn(idToken);
  }, [])

  let routes = (
    <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
      </Switch>
    )
  }

  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout>
          {/* <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} /> */}
          {routes}
        </Layout>
      </React.Fragment>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.idToken !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loggedIn: (idToken) => dispatch({ type: 'LOGGED_IN', idToken: idToken})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
