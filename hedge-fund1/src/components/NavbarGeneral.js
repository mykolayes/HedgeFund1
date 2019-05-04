import React, { Component } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';

import {Nav, Navbar, NavLink, NavItem} from "reactstrap";
// import Container from "reactstrap/es/Container";

class NavbarGeneral extends Component {
    render() {
        return (
            <div className="NavbarGeneral">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                <li><NavLink href="/" className="nav-link">Home</NavLink></li>
                <li><NavLink href={'/charts'} className="nav-link">Charts</NavLink></li>
                <li><NavLink href={'/team'} className="nav-link">Team</NavLink></li>
                <li><NavLink href={'/about'} className="nav-link">About</NavLink></li>
                </ul>
                <div className="pull-right">
                    <ul className="navbar-nav mr-auto">
                        <li><NavLink href="/register" className="nav-link">Register/Log in</NavLink></li>
                        <li><NavLink href={'/account'} className="nav-link">My account</NavLink></li>
                        <li><NavLink href={'/orders'} className="nav-link">Orders cart</NavLink></li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavbarGeneral;