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
                    <iframe src="http://mses.kpi.ua/kursovi2/zinchenko.pdf" height="800" width="800"></iframe>
                </div>

            </div>
        );
    }
}
export default OrdersCart;