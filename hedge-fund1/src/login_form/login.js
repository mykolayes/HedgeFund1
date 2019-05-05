import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {NavLink} from "reactstrap";
import axios from 'axios';

import '../Login.css';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            email: "",
            password: "",
            loggedIn: false,
            showError: false,
            showNullError: false,
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email === '' || password === '') {
            this.setState({
                showErorr: false,
                showNullError: true,
                loggedIn: false,
            });
        } else {
            axios
                .post('http://localhost:3001/api/users/login', {
                    user: {
                        email,
                        password,
                    },
                })
                .then((response) => {
                    localStorage.setItem('JWT', response.data.user.token);
                    this.state.user = response.data.user;
                    console.log(response.data.user);
                    this.setState({
                        loggedIn: true,
                        showError: false,
                        showNullError: false,
                    });
                })
                .catch((error) => {
                    console.error(error.response);
                    this.setState({
                        showError: true,
                        showNullError: false,
                    });
                });
        }
    }

    render() {  
        const {
            user,
            email,
            password,
            showError,
            loggedIn,
            showNullError,
          } = this.state;
        if (!loggedIn) {
            return (
                <div className="Login">
                    <header className="Login-header">
                        <h1>Log in</h1>
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                    <NavLink className={"Login-main"} href={'/register'}>
                        Not account yet? Register!
                    </NavLink>
    
                </div>
            );
        }
        return <Redirect to={{
                pathname: `/user/${user.username}`,
                state: {user}
            }}
        />
    }
}
export default Login;