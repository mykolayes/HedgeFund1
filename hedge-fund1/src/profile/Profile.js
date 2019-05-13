import React, { Component } from 'react';
import { Alert, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

import '../App.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      privatekey: "",
      gotPrivateKey: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  componentDidMount() {
    const accessString = localStorage.getItem('JWT');
    if(accessString !== '') {
      axios.get('http://localhost:3001/api/user', {
        headers: { Authorization: `Bearer ${accessString}` },
      }).then(response => {
        this.setState({
          user:response.data.user
        });
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const accessString = localStorage.getItem('JWT');
    if(accessString !== '') {
      axios.post('http://localhost:3001/api/keys/new', {},{
        headers: { Authorization: `Bearer ${accessString}` },
      }).then(response => {
        this.setState({
          privatekey: response.data,
          gotPrivateKey: true,
        });
      })
    }
  }

  render() {
    const { 
      user,
      privatekey,
      gotPrivateKey,
    } = this.state;
    return (
      <div className="get-key">
        {gotPrivateKey &&
          <Alert key='1' variant='warning'>
            Here's your private key, write it down! You cannot restore it later!!!<br/><b>{privatekey}</b>
          </Alert>
        }
        <form>
          {(user.publickey && user.publickey.length > 0) &&
            <FormGroup controlId="pubkey" bsSize="large">
              <FormLabel>Your public key</FormLabel>
              <FormControl
                  disabled
                  type="text"
                  value={this.state.user.publickey}
              />
          </FormGroup>}
          {(user.publickey === '') && <Button
              block
              bsSize="large"
              onClick={this.handleSubmit}
          >
              Get private key
          </Button>
          }
        </form>
      </div>
    );
  }
}

export default Profile;