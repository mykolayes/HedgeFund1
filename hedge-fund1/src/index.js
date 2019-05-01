import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';
import HedgeFundContainer from "./hedge_fund_container/HedgeFundContainer";
import About from "./about_container/About";
import Layout from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={ App }/>
        {/*<Route exact path="/" component={ HedgeFundContainer }/>*/}
        {/*<Route path="/about" component={ About }/>*/}
    </BrowserRouter>, document.getElementById('root')
);

// const routing = (
//     <BrowserRouter>
//         <Layout>
//             <div>
//                 <Route exact path="/" component={ HedgeFundContainer }/>
//                 <Route path="/about" component={ About }/>
//             </div>
//         </Layout>
//     </BrowserRouter>
// )
//
// ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
