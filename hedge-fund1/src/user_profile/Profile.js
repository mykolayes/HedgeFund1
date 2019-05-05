import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

import '../App.css';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      privatekey: "",
      data: "",
    };
  }


  validateForm() {
    return this.state.privatekey.length > 0 && this.state.data.length > 0;
  }

  handleChange = event => {
      this.setState({
          [event.target.id]: event.target.value
      });
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    const { user } = this.props.location.state;
    this.state.user = user;
    return (
      <div className="user-profile">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="data" bsSize="large">
                <FormLabel>Data to sign</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={this.state.data}
                    onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="privatekey" bsSize="large">
                <FormLabel>Your private key</FormLabel>
                <FormControl
                    value={this.state.privatekey}
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
                Sign
            </Button>
        </form>
      </div>
    );
  }
}

export default Profile;