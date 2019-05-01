import React, { Component } from 'react';
import '../App.css';

class ChartWidget extends Component {
    render() {
        return(
        <div className="IFrameContainer">
            <div className="IFrameContainerInner">
            {/*<iframe height="480" width="650" src="https://ssltvc.forexprostools.com/?pair_ID=945629&height=480&width=650&interval=300&plotStyle=area&domain_ID=1&lang_ID=1&timezone_ID=7"></iframe>*/}
                {/*<iframe height="355" width="430" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1058450&timescale=300&candles=50&style=candles"></iframe>*/}
                {/*<iframe height="700" width="1200" src="https://ssltvc.forexprostools.com/?pair_ID=945629&height=700&width=1200&interval=300&plotStyle=candles&domain_ID=1&lang_ID=1&timezone_ID=16"></iframe>*/}
                <iframe title={ 'chartframe' } height="700" width="1200" src="https://www.cryptocurrencychart.com/chart/BTC,ETH,XRP/price/USD/linear/2018-04-29/2019-04-24"></iframe>
            </div>
        </div>

        );
    }
}

export default ChartWidget;