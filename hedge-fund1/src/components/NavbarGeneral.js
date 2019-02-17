import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import {Nav, Navbar} from "reactstrap";
import Container from "reactstrap/es/Container";

class NavbarGeneral extends Component {
    render() {
        return (
            <div className="NavbarGeneral">
                {/*<Container>*/}
                    {/*<Navbar bg="light" expand="lg">*/}
                        {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                        {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                            {/*<Nav className="mr-auto">*/}
                                {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                                {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            {/*</Nav>*/}
                        {/*</Navbar.Collapse>*/}
                    {/*</Navbar>;*/}
                {/*</Container>*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavbarGeneral;