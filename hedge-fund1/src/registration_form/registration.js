import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

import '../Login.css';


class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            email: "",
            password: "",
            username: "",
            first_name: "",
            last_name: "",
            messageFromServer: "",
            showError: false,
            registerError: false,
            loginError: false,
        };
    }

    validateForm() {
        return this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.username.length > 0 &&
            this.state.first_name.length > 0 &&
            this.state.last_name.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password, username, first_name, last_name } = this.state;
        axios.post('http://localhost:3001/api/users/signup', {
            user: {
                email,
                password,
                username,
                first_name,
                last_name,
            },
        })
            .then(response => {
                localStorage.setItem('JWT', response.data.user.token);
                console.log(response.data);
                this.state.user = response.data.user;
                this.setState({
                    messageFromServer: 'success',
                    showError: false,
                    loginError: false,
                    registerError: false,
                })
            })
            .catch(error => {
                console.error(error.response.data);
                this.setState({
                    showError: true,
                    loginError: true,
                    registerError: false,
                });
            });
    }

    render() {
        const {
            user,
            email,
            password,
            username,
            first_name,
            last_name,
            messageFromServer,
            showError,
            loginError,
            registerError,
          } = this.state;
        console.log(user);
        if (messageFromServer === '') {
            return (
                <div className="Login">
                    <header className="Login-header">
                        <h1>Register</h1>
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
                        <FormGroup controlId="username" bsSize="large">
                            <FormLabel>Username</FormLabel>
                            <FormControl
                                type="text"
                                value={this.state.username}
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
                        <FormGroup controlId="first_name" bsSize="large">
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                                value={this.state.first_name}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup controlId="last_name" bsSize="large">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                                value={this.state.last_name}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Register
                        </Button>
                    </form>
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
export default Registration;