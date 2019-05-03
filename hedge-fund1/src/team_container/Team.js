import React, { Component } from 'react';

import '../App.css';

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
                    C-level. CEO - Yevhen Nevmerzhytskyi, CTO - Kyrylo Horohovskyi
                </p>
                <p className="Team-main">
                    Developers, front-end: Andriy Gonchar, Andriy Nahnybida, Yeshchenko Mykola
                </p>
                <p className="Team-main">
                    Developers, back-end: Artem Layko, Andriy Moroz
                </p>
            </div>
        );
    }
}
export default Team;