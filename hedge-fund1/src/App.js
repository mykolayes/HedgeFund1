import React, { Component } from 'react';
//import logo from './logo.svg';
//import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Route} from 'react-router-dom';
//import { Link, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

import HedgeFundContainer from './hedge_fund_container/HedgeFundContainer';
import About from "./about_container/About";
import Team from "./team_container/Team";
import MyAccount from "./my_account/MyAccount";
import Charts from "./charts/Charts";
import OrdersCart from "./orders_cart/OrdersCart";
import Login from "./login_form/login";
import Registration from "./registration_form/registration";


class App extends Component {
  render() {
    return (
        <Layout>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={HedgeFundContainer} />
                    <Route path='/charts' component={Charts} />
                    <Route path='/team' component={Team} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Registration} />
                    <Route path='/account' component={MyAccount} />
                    <Route path='/orders' component={OrdersCart} />
                </div>
            </BrowserRouter>
        </Layout>
    );
  }
}



export default App;
