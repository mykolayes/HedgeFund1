import React, { Component } from 'react';

import '../App.css';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
}

  render() {
    const { user } = this.props.location.state;
    this.state.user = user;
    return (
      <div className="user-profile">
        Hello, {user.username}
      </div>
    );
  }
}

export default Profile;