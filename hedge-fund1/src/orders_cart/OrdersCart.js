import React, { Component } from 'react';

import '../App.css';


class OrdersCart extends Component {

    render() {
        return (
            <div className="OrdersCart">
                <header className="OrdersCart-header">
                    <h1>Orders Cart</h1>
                </header>
                <p className="OrdersCart-intro">
                    Invest fiat money
                </p>

                (Algorobot should be placed somewhere here)

                <div className="codegena_iframe">
                    <iframe src="http://mses.kpi.ua/kursovi2/zinchenko.pdf" height="400" width="600"></iframe>
                </div>
                {/*<style>.codegena_iframe{position:relative;padding-bottom:56.25%;height:0;overflow: hidden;max-width:100%;}.codegena_iframe*/}
                    {/*iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style>*/}
            </div>
        );
    }
}
export default OrdersCart;