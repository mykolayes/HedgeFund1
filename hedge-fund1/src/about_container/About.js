import React, { Component } from 'react';

import '../App.css';

class About extends Component {

    render() {
        return (
            <div className="About">
                <header className="About-header">
                    <h1>About</h1>
                </header>
                <p className="About-intro">
                    Founded in 2018
                </p>

                <p className="About-main">
                    Developed by a group of 5 on the request of a Ukrainian economist Yevhen Nevmerzhytskyi, with support of Kyrylo Semenovych.
                </p>
                <p className="About-main">
                    This cryptoassets hedgefund welcomes everyone to participate in investments to TOPI token, as well as 10 most capitalized cryptocurrencies.
                </p>
                <p className="About-main">
                    In order to get started, just register. Investing becomes available immediately after that.
                </p>
            </div>
        );
    }
}
export default About;