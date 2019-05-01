import React, { Component } from 'react';

import '../App.css';

class Charts extends Component {

    render() {
        return (
            <div className="Charts">
                <header className="Charts-header">
                    <h1>Charts</h1>
                </header>
                <p className="Charts-intro">
                    Cryptocurrency charts
                </p>

                <div>
                    <p className="Charts-intro">
                        BTC/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=21&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        ETH/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=997650&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        XRP/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1010774&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        LTC/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=53080&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        EOS/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1024821&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        BCH/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1031043&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        USDT/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1031397&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        TRX/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1054991&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        XLM/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1036958&timescale=86400&candles=50&style=candles"></iframe>
                </div>
                <div>
                    <p className="Charts-intro">
                        BNB/USD
                    </p>
                    <iframe height="710" width="860" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1054919&timescale=86400&candles=50&style=candles"></iframe>
                </div>
            </div>
        );
    }
}
export default Charts;