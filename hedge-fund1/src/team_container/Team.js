import React, { Component } from 'react';

import '../App.css';

import ph1 from "../resources/5698-nevmerzhickij-evgen-_origin.png";

class Team extends Component {

    render() {
        return (
            <div className="Team">
                <header className="Team-header">
                    <h1>Team</h1>
                </header>
                <p className="Team-intro">
                    Meet the team
                </p>

                <p className="Team-main">
                    C-level
                </p>
                <p className="Team-main">
                    CEO - Yevhen Nevmerzhytskyi
                </p>
                <div className="Team-main">
                        <img src={ph1}  />
                </div>

                <p className="Team-main">
                    CTO - Kyrylo Horohovskyi
                </p>
                <div className="Team-main">
                    <img width={318} height={318}  />
                </div>

                <p className="Team-main">
                    Developers, front-end: Andriy Gonchar, Andriy Nahnybida, Yeshchenko Mykola
                </p>
                <p className="Team-main">
                    Developers, back-end: Artem Layko, Andriy Nahnybida, Andriy Moroz
                </p>
            </div>
        );
    }
}
export default Team;