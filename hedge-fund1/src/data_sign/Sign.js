import React, { Component } from 'react';
import { Alert, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

import '../App.css';

class Sign extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      privatekey: "",
      data: "",
      signHash: "",
      signed: false,
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
    const accessString = localStorage.getItem('JWT');
    const {
      privatekey,
      data
    } = this.state;
    if(privatekey.length !== '' && data !== '') {
      axios.post('http://localhost:3001/api/keys/sign', {
          secretKey: privatekey,
          dataToSign: data
        },
        {
          headers: { Authorization: `Bearer ${accessString}` },
        },
      ).then(response => {
        this.setState({
          signHash: response.data,
          signed: true
        });
      }).catch((error) => {
        console.log(error.response);
        this.setState({
          signHash: '',
          signed: false
        });
      });
    }
  }

  render() {
    // const { user } = this.props.location.state;
    const {
      signHash,
      signed } = this.state;
    return (
      <div className="user-profile">
          {signed &&
            <Alert key='1' variant='success'>
              The data has been validated and signed, here's the hash <b>{signHash}</b>
            </Alert>
          }
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="data" bsSize="large">
                <FormLabel>Data to sign</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
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

export default Sign;