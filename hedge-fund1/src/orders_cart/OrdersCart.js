import React, { Component } from 'react';

import '../App.css';


class OrdersCart extends Component {

    render() {
        return (
            <div className="OrdersCart">
                <header className="OrdersCart-header">
                    <h1>Orders Cart</h1>
                </header>
                {/*<p className="OrdersCart-intro">*/}
                    {/*/!*Invest fiat money*!/*/}
                    {/*Trade*/}
                {/*</p>*/}

                <div>
                    <iframe src="http://localhost/newtrade.php" height="800" width="100%" frameBorder="0"></iframe>
                </div>

            </div>
        );
    }
}
export default OrdersCart;