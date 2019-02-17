import React, { Component } from 'react';
import '../App.css';
import Iframe from 'react-iframe';

class ChartWidget extends Component {
    //  constructor() {
    //     super()
    // //     this.state = {
    // //         cryptos: [],
    // //     }
    //  }
    // componentDidMount() {
    //
    // }
    render() {
        return(
        <div className="IFrameContainer">
            <div className="IFrameContainerInner">
            {/*<iframe height="480" width="650" src="https://ssltvc.forexprostools.com/?pair_ID=945629&height=480&width=650&interval=300&plotStyle=area&domain_ID=1&lang_ID=1&timezone_ID=7"></iframe>*/}
                {/*<iframe height="355" width="430" src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1058450&timescale=300&candles=50&style=candles"></iframe>*/}
                <iframe height="700" width="1200" src="https://ssltvc.forexprostools.com/?pair_ID=945629&height=700&width=1200&interval=300&plotStyle=candles&domain_ID=1&lang_ID=1&timezone_ID=16"></iframe>
            </div>
        </div>

        );
    }
}

export default ChartWidget;