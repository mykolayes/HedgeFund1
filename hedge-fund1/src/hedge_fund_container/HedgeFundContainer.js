import React, { Component } from 'react';

import axios from 'axios';

import * as api from '../api';

import '../App.css';

import ChartWidget from '../investing_com_chart_widget/ChartWidget';

var NumberFormat = require('react-number-format');

class HedgeFundContainer extends Component {
    constructor() {
        super()
        this.state = {
            cryptos: [],
            //topiUSD: 0.0,
        }
    }

    componentDidMount() {
        // console.log('componentDidMount, calling api.getListings from DashboardContainer...')
        // api.getListings()
        //     .then(response => this.setState({
        //         cryptos: response
        //     }))
        // console.log('step 2, setting state of listings to response from promise...')
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,EOS,BCH,USDT,TRX,XLM,BNB&tsyms=USD,EUR,UAH')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
                // this.setState({topiUSD : 0});
                // console.log(this.state.cryptos.keys());
                // Object.keys(this.state.cryptos).map((key) => (
                //     this.setState({topiUSD: parseFloat(this.state.topiUSD) + parseFloat(this.state.cryptos[key].USD)})
                //         // ,                    console.log(this.state.cryptos[key].USD)
                // ));
                //console.log(this.state.topiUSD.toExponential());
            })
    }

    calcTOPIusd(){
        var avg = 0.0;
        // var ps = currencyx.toString();
            Object.keys(this.state.cryptos).map((key) => (
                avg += parseFloat(this.state.cryptos[key].USD)
                ,                    console.log(this.state.cryptos[key].USD)
            ))
        avg /= Object.keys(this.state.cryptos).length;
        return avg;
    }
    calcTOPIeur(){
        var avg = 0.0;
        Object.keys(this.state.cryptos).map((key) => (
            avg = parseFloat(avg) + parseFloat(this.state.cryptos[key].EUR)
        ))
        avg /= Object.keys(this.state.cryptos).length;
        return avg;
    }
    calcTOPIuah(){
        var avg = 0.0;
        Object.keys(this.state.cryptos).map((key) => (
            avg = parseFloat(avg) + parseFloat(this.state.cryptos[key].UAH)
        ))
        avg /= Object.keys(this.state.cryptos).length;
        return avg;
    }

    render() {
        return (
            <div className="HedgeFundContainer">
                <header className="HedgeFundContainer-header">
                    <h1>Welcome to the Hedge Fund</h1>
                </header>
                <p className="HedgeFundContainer-intro">
                    Exchange rates are listed below:
                </p>

                <div className="HedgeFundContainer-exchRates">
                    <div className="Crypto-container">
                        <span className="left">TOPI</span>
                        <span className="right"><NumberFormat value={this.calcTOPIusd().toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                        <span className="right"><NumberFormat value={this.calcTOPIeur().toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'€'} /></span>
                        <span className="right"><NumberFormat value={this.calcTOPIuah().toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₴'} /></span>
                    </div>
                    <br/>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <div className="Crypto-container">
                            <span className="left">{key.normalize()}</span>
                            <span className="right"><NumberFormat value={this.state.cryptos[key].USD.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span> {/*decimalprecision={2}*/}
                            <span className="right"><NumberFormat value={this.state.cryptos[key].EUR.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'€'} /></span>
                            <span className="right"><NumberFormat value={this.state.cryptos[key].UAH.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₴'} /></span>
                        </div>
                    ))}
                </div>
                <br/>
                <div>
                    <ChartWidget />
                </div>
            </div>
        );
    }
}
export default HedgeFundContainer;