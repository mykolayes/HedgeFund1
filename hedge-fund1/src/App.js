import React, { Component } from 'react';
//import logo from './logo.svg';
//import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
//import { Link, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

import HedgeFundContainer from './hedge_fund_container/HedgeFundContainer';
import ChartWidget from './investing_com_chart_widget/ChartWidget';


class App extends Component {
  render() {
    return (
        <Layout>
            <BrowserRouter>
                <div>
                    <Route path='/' component={HedgeFundContainer} />
                    {/*<Route path='/contact' component={Contact} />*/}
                </div>
            </BrowserRouter>
        </Layout>
    );
  }
}



export default App;
