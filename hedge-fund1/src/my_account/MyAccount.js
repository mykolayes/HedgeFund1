import React, { Component } from 'react';

import '../App.css';

class MyAccount extends Component {

    render() {
        return (
            <div className="MyAccount">
                <header className="About-header">
                    <h1>Account details</h1>
                </header>
                <p className="Account-balance">
                    Current balance:
                </p>

                <p className="Account-currency">
                    TOPI: 0
                </p>
                <br/>
                <p className="Account-currency">
                    USD: 0
                </p>
                <p className="Account-currency">
                    EUR: 0
                </p>
                <p className="Account-currency">
                    UAH: 0
                </p>
                <br/>
                <p className="Account-currency">
                    BTC: 0
                </p>
                <p className="Account-currency">
                    ETH: 0
                </p>
                <p className="Account-currency">
                    XRP: 0
                </p>
                <p className="Account-currency">
                    LTC: 0
                </p>
                <p className="Account-currency">
                    EOS: 0
                </p>
                <p className="Account-currency">
                    BCH: 0
                </p>
                <p className="Account-currency">
                    USDT: 0
                </p>
                <p className="Account-currency">
                    TRX: 0
                </p>
                <p className="Account-currency">
                    XLM: 0
                </p>
                <p className="Account-currency">
                    BNB: 0
                </p>
            </div>
        );
    }
}
export default MyAccount;